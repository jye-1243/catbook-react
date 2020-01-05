import React, { Component } from "react";
import { Link } from "@reach/router";

/**
 * Story is a component that renders creator and content of a story
 *
 * Proptypes
 * @param {string} _id of the story
 * @param {string} creator_name
 * @param {string} content of the story
 */
class SingleStory extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      // TODO: Add link to profile page
      <div className="Card-story">
        <span className="u-bold">{this.props.creator_name}</span>
        <p className="Card-storyContent">{this.props.content}</p>
      </div>
    );
  }
}

export default SingleStory;
