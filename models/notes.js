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
  classId: {
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
  },
  Clicked: {
    type: Number,
    default: 0  
  }
});

const Notes = mongoose.model("Notes", NotesSchema);

module.exports = Notes;
