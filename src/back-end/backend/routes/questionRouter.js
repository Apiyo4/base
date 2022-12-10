const {
  getAnsweredQuestions,
  getQuestions,
  setQuestion,
  updateQuestion,
  deleteQuestion,
} = require("../controllers/questionController");
const express = require("express");
const { authCheck } = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/", authCheck, getQuestions);
router.post("/", setQuestion);
router.delete("/:id", authCheck, deleteQuestion);
router.put("/:id", authCheck, updateQuestion);
router.get("/answered", getAnsweredQuestions);
module.exports = router;
