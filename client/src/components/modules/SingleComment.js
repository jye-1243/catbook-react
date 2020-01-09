import React, { Component } from "react";
import { Link } from "@reach/router";

import { createFragmentContainer } from "react-relay";

/**
 * Component to render a single comment
 */
class SingleComment extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const comment = this.props.comment;
    const creator = comment.creator;
    const creatorName = creator && creator.name;
    return (
      <div className="Card-commentBody">
        <Link to={`/profile/${creator.id}`} className="u-link u-bold">
          {creatorName}
        </Link>
        <span>{" | " + comment.content}</span>
      </div>
    );
  }
}

export default createFragmentContainer(SingleComment, {
  comment: graphql`
    fragment SingleComment_comment on Comment {
      creator {
        id
        name
      }
      content
    }
  `,
});
