const Comment = require("../models/comment");
const Story = require("../models/story");
const User = require("../models/user");

module.exports = {
  Comment: {
    creator(comment, _args, _req, context) {
      // Some docs in the class' database have bad ids. Return a 'fake' user.
      if (comment.creator_id == null || comment.creator_id === "testid") {
        return {
          id: comment.creator_id,
          name: comment.creator_name,
        };
      }
      return context.rootValue.UserLoader.load(comment.creator_id);
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
      return context.rootValue.UserLoader.load(story.creator_id);
    },
  },
  Query: {
    comment(rootValue, args) {
      return rootValue.CommentLoader.load(args.id);
    },
    story(rootValue, args) {
      return rootValue.StoryLoader.load(args.id);
    },
    user(rootValue, args) {
      return rootValue.UserLoader.load(args.id);
    },
    stories() {
      return Story.find({});
    },
  },
  Mutation: {
    storyCreate(_, args, req) {
      if (!req.user) {
        throw new Error("You must be logged in to create a story.");
      }
      const newStory = new Story({
        creator_id: req.user._id,
        creator_name: req.user.name,
        content: args.content,
      });
      return newStory.save();
    },
  },
};
