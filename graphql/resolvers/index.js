const  Query = require('./queries/query');
const  Not = require('./queries/not');
const  Lesson = require('./queries/lesson');
const  User = require('./queries/usernot');

const Mutation = require('./mutation/index');

module.exports = {
    Query,
    Mutation,
    Not,
    User,
    Lesson
}
