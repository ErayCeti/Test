const user = require('./user.mutation');
const not = require('./not.mutation');
const lesson = require('./lesson.mutation');
const Class = require('./class.mutation');
const Chat = require('./chat.mutation');
const Mutation = {
    ...user,
    ...not,
    ...lesson,
    ...Class,
    ...Chat
};

module.exports = Mutation;
