const mongoose = require("mongoose");
const testSchema = mongoose.Schema(
  {
    question: {
      type: String,
      required: [true, "Please add a question"],
    },
    answer: {
      type: String,
      required: [true, "Please add a question"],
    },
    difficulty: {
        type: Number,
        required: [true, "Please add difficulty level"],
      },
    choices:{
        choice1: {
            type: String,
            required: [true, "Please add choices"],
          },
        choice2: {
            type: String,
            required: [true, "Please add choices"],
          },
        choice3: {
            type: String,
            required: [true, "Please add choices"],
          },
        choice4: {
            type: String,
            required: [true, "Please add choices"],
          },

    }
  },
  { timestamps: true }
);
module.exports = mongoose.model("Test", testSchema);
