import React, { Component } from "react";
import Card from "../modules/Card.js";
import { QueryRenderer, graphql } from "react-relay";
import CatbookEnvironment from "../../CatbookEnvironment";

class Feed extends Component {
  // called when the "Feed" component "mounts", i.e.
  // when it shows up on screen
  componentDidMount() {
    document.title = "News Feed";
  }

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
                .map((storyObj) => <Card key={`Card_${storyObj.id}`} story={storyObj} />);
            } else {
              storiesList = <div>No stories!</div>;
            }
          } else {
            storiesList = <div>Loading stories&hellip;</div>;
          }
          return storiesList;
        }}
      />
    );
  }
}

export default Feed;
