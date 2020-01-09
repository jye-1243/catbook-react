const Comment = require("../models/comment");
const Story = require("../models/story");
const User = require("../models/user");

module.exports = {
  Comment: {
    creator(comment) {
      // Some docs in the class' database have bad ids. Return a 'fake' user.
      if (comment.creator_id == null || comment.creator_id === "testid") {
        return {
          id: comment.creator_id,
          name: comment.creator_name,
        };
      }
      return User.findById(comment.creator_id);
    },
  },
  Story: {
    comments(story) {
      return Comment.find({ parent: story.id });
    },
    creator(story, _args, _req, context) {
      // Some docs in the class' database have bad ids. Return a 'fake' user.
      if (story.creator_id == null || story.creator_id === "testid") {
        return {
          id: story.creator_id,
          name: story.creator_name,
        };
      }
      return User.findById(story.creator_id);
    },
  },
  Query: {
    comment(_, args) {
      return Comment.findById(args.id);
    },
    story(_, args) {
      return Story.findById(args.id);
    },
    user(_, args) {
      return User.findById(args.id);
    },
    stories() {
      return Story.find({});
    },
  },
};
