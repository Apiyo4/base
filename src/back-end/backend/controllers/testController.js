const asyncHandler = require("express-async-handler");
const Test = require("../models/testModel");
const getTests = asyncHandler(async (req, res) => {
  const tests = await Test.find();
  res.status(200).json(tests);
});
const setTest = asyncHandler(async (req, res) => {
  if (!req.body) {
    res.status(400);
    throw new Error("Please add a test body");
  }
  const test = await Test.create({
    question: req.body.question,
    answer: req.body.answer,
    choices: {
        choice1: req.body.choices.choice1,
        choice2: req.body.choices.choice2,
        choice3: req.body.choices.choice3,
        choice4: req.body.choices.choice4,
    },
    difficulty: req.body.difficulty
    
  });

  res.status(200).json(test);
});
const deleteTest = asyncHandler(async (req, res) => {
  const test = await Test.findById(req.params.id);
  if (!test) {
    res.status(400);
    throw new Error("test not found");
  }
  await test.remove();
  res.status(200).json({ id: req.params.id });
});

const updateTest = asyncHandler(async (req, res) => {
  const test = await Test.findById(req.params.id);
  if (!test) {
    res.status(400);
    throw new Error("test not found");
  }
  const updatedTest = await Test.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json({ updatedTest });
});

module.exports = { getTests, setTest, updateTest, deleteTest };
