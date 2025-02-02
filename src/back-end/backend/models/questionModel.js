const mongoose = require("mongoose");
const questionSchema = mongoose.Schema(
  {
    question: {
      type: String,
      required: [true, "Please add a question"],
    },
    answer: {
      type: String,
      default: null,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Question", questionSchema);
