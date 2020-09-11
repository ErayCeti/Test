const User = require('./user.mutation');
const Not = require('./not.mutation');
const Lesson = require('./lesson.mutation');
const Class = require('./class.mutation');
const Post = require('./post.mutation');
const Comment = require('./comment.mutation');

const Mutation = {
    ...User,
    ...Not,
    ...Lesson,
    ...Class,
    ...Post,
    ...Comment,
};

module.exports = Mutation;
