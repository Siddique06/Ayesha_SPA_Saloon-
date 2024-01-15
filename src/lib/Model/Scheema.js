const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  name: String,
  feedback: String,
  rating:{
    type:Number,
    required:true,
  },
  date: {
    type: Date,
    default: Date.now // Set the default value to the current date and time
  }
});

export const CommentModel = mongoose.models.comments || mongoose.model("comments", CommentSchema);
