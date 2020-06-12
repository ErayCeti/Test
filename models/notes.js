const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const NotesSchema = new Schema({
  Name: {
    type: String
  },
  lessonId: {
    type: String
  },
  userId: {
    type: String
  },
  Link: {
    type: String
  },
  CreatedAt: {
    type: Date,
    default: Date.now()
  },
  DeletedAt: {
    type: Date
  }
});

const Notes = mongoose.model("Notes", NotesSchema);

module.exports = Notes;
