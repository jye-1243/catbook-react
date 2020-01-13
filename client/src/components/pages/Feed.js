import React, { Component } from "react";
import Card from "../modules/Card.js";
import { QueryRenderer, commitMutation, graphql } from "react-relay";
import CatbookEnvironment from "../../CatbookEnvironment";
import { NewPostInput } from "../modules/NewPostInput.js";

class Feed extends Component {
  // called when the "Feed" component "mounts", i.e.
  // when it shows up on screen
  componentDidMount() {
    document.title = "News Feed";
  }

  addNewStory = (content) => {
    commitMutation(CatbookEnvironment, {
      mutation: graphql`
        mutation FeedCreateStoryMutation($content: String!) {
          storyCreate(content: $content) {
            id
            ...Card_story
          }
        }
      `,
      updater(store) {
        // Get the current list of stories in the Relay store.
        const stories = store.getRoot().getLinkedRecords("stories");
        // Get the story we just created from the mutation response.
        const newStory = store.getRootField("storyCreate");
        // Produce the post-mutation list of stories and write it to the store.
        let nextStories;
        if (!stories) {
          nextStories = [newStory];
        } else {
          nextStories = stories.concat([newStory]);
        }
        store.getRoot().setLinkedRecords(nextStories, "stories");
      },
      variables: {
        content: content,
      },
    });
  };

  render() {
    return (
      <QueryRenderer
        environment={CatbookEnvironment}
        query={graphql`
          query FeedQuery {
            stories {
              id
              ...Card_story
            }
          }
        `}
        render={({ error, props }) => {
          let storiesList;
          if (props) {
            const stories = props.stories;
            if (stories && stories.length > 0) {
              storiesList = Array.from(stories)
                .reverse()
                .map((storyObj) => (
                  <Card key={`Card_${storyObj.id}`} story={storyObj} userId={this.props.userId} />
                ));
            } else {
              storiesList = <div>No stories!</div>;
            }
          } else {
            storiesList = <div>Loading stories&hellip;</div>;
          }
          return (
            <>
              {this.props.userId && (
                <NewPostInput defaultText="New Story" onSubmit={this.addNewStory} />
              )}
              {storiesList}
            </>
          );
        }}
      />
    );
  }
}

export default Feed;
