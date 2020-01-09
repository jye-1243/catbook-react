import React, { Component } from "react";
import SingleStory from "./SingleStory.js";
import CommentsBlock from "./CommentsBlock.js";
import { createFragmentContainer } from "react-relay";

import "./Card.css";

/**
 * Card is a component for displaying content like stories
 */
class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Card-container">
        <SingleStory story={this.props.story} />
        <CommentsBlock story={this.props.story} />
      </div>
    );
  }
}

export default createFragmentContainer(Card, {
  story: graphql`
    fragment Card_story on Story {
      id
      ...CommentsBlock_story
      ...SingleStory_story
    }
  `,
});
