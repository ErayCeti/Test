const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ChatSchema = new Schema({
    Message:{
        type: String
    },
    userId:{
        type: String
    },
    CreatedAt:{
        type: Date,
        default: Date.now()
    }
});

const Chat = mongoose.model("Chat", ChatSchema);

module.exports = Chat;
