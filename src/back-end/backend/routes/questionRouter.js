const {
  getQuestions,
  setQuestion,
  updateQuestion,
  deleteQuestion,
} = require("../controllers/questionController");
const express = require("express");
const router = express.Router();
console.log(getQuestions);
router.get("/", getQuestions);
router.post("/", setQuestion);
router.delete("/:id", deleteQuestion);
router.put("/:id", updateQuestion);
module.exports = router;
