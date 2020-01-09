import React, { Component } from "react";
import SingleComment from "./SingleComment.js";
import { createFragmentContainer } from "react-relay";

/**
 * Component that holds all the comments for a story
 */
class CommentsBlock extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Card-commentSection">
        <div className="story-comments">
          {this.props.story.comments.map((comment) => (
            <SingleComment comment={comment} key={`SingleComment_${comment.id}`} />
          ))}
        </div>
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
