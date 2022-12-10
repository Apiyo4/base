const {
    getTests,
    setTest,
    updateTest,
    deleteTest,
  } = require("../controllers/testController");
  const express = require("express");
const { authCheck } = require("../middleware/authMiddleware");
  const router = express.Router();
  router.get("/", getTests);
  router.post("/", authCheck, setTest);
  router.delete("/:id", authCheck, deleteTest);
  router.put("/:id", authCheck, updateTest);
  module.exports = router;
  