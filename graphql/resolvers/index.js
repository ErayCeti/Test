const  Query = require('./queries/query');
const  Not = require('./queries/not');
const  Lesson = require('./queries/lesson');
const  User = require('./queries/usernot');
const  Class = require('./queries/class');
const  Chat = require('./queries/chat');

const Mutation = require('./mutation/index');
const Subscription = require('./subscriptions/index');

module.exports = {
    Query,
    Mutation,
    Subscription,
    Not,
    User,
    Lesson,
    Class,
    Chat
}
