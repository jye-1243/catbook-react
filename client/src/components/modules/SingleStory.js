import React, { Component } from "react";
import { Link } from "@reach/router";
import { createFragmentContainer } from "react-relay";

/**
 * Story is a component that renders creator and content of a story
 */
class SingleStory extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const story = this.props.story;
    const creator = story.creator;
    const creatorId = creator ? creator.id : "Unknown";
    const creatorName = creator ? creator.name : "Unknown";
    return (
      <div className="Card-story">
        <Link to={`/profile/${creatorId}`} className="u-link u-bold">
          {creatorName}
        </Link>
        <p className="Card-storyContent">{story.content}</p>
      </div>
    );
  }
}

export default createFragmentContainer(SingleStory, {
  story: graphql`
    fragment SingleStory_story on Story {
      creator {
        id
        name
      }
      content
    }
  `,
});
