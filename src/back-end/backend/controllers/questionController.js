const asyncHandler = require("express-async-handler");
const Question = require("../models/questionModel");
const getQuestions = asyncHandler(async (req, res) => {
  const questions = await Question.find();
  res.status(200).json(questions);
});
const setQuestion = asyncHandler(async (req, res) => {
  if (!req.body.question) {
    res.status(400);
    throw new Error("Please add a question");
  }
  const question = await Question.create({
    question: req.body.question,
    answer: "",
  });

  res.status(200).json(question);
});
const deleteQuestion = asyncHandler(async (req, res) => {
  const question = await Question.findById(req.params.id);
  if (!question) {
    res.status(400);
    throw new Error("Question not found");
  }
  await question.remove();
  res.status(200).json({ id: req.params.id });
});

const updateQuestion = asyncHandler(async (req, res) => {
  const question = await Question.findById(req.params.id);
  if (!question) {
    res.status(400);
    throw new Error('Question not found')
  }
  const updatedQuestion = await Question.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json({ updatedQuestion});
});

module.exports = { getQuestions, setQuestion,updateQuestion, deleteQuestion };
