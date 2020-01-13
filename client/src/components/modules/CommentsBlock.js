import React, { Component } from "react";
import SingleComment from "./SingleComment.js";
import { createFragmentContainer, commitMutation, graphql } from "react-relay";
import { NewPostInput } from "./NewPostInput";

/**
 * Component that holds all the comments for a story
 */
class CommentsBlock extends Component {
  constructor(props) {
    super(props);
  }

  addNewComment = (content) => {
    commitMutation(this.props.relay.environment, {
      mutation: graphql`
        mutation CommentsBlockCommentCreateMutation($content: String!, $storyId: ID!) {
          commentCreate(content: $content, storyId: $storyId) {
            id
            ...SingleComment_comment
          }
        }
      `,
      updater: (store) => {
        // Get the story that this comment is being added to.
        const story = store.get(this.props.story.id);
        if (!story) {
          return;
        }
        // Get the current list of comments on that story.
        const existingComments = story.getLinkedRecords("comments");
        // Get the commenet we just created from the mutation response.
        const newComment = store.getRootField("commentCreate");
        // Produce the post-mutation list of comments and write it to the story.
        let nextComments;
        if (!existingComments) {
          nextComments = [newComment];
        } else {
          nextComments = existingComments.concat([newComment]);
        }
        story.setLinkedRecords(nextComments, "comments");
      },
      variables: {
        content: content,
        storyId: this.props.story.id,
      },
    });
  };

  render() {
    return (
      <div className="Card-commentSection">
        <div className="story-comments">
          {this.props.story.comments.map((comment) => (
            <SingleComment comment={comment} key={`SingleComment_${comment.id}`} />
          ))}
        </div>
        {this.props.userId && (
          <NewPostInput defaultText="New Comment" onSubmit={this.addNewComment} />
        )}
      </div>
    );
  }
}

export default createFragmentContainer(CommentsBlock, {
  story: graphql`
    fragment CommentsBlock_story on Story {
      id
      comments {
        id
        ...SingleComment_comment
      }
    }
  `,
});
