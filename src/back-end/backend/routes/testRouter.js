const {
    getTests,
    setTest,
    updateTest,
    deleteTest,
  } = require("../controllers/testController");
  const express = require("express");
  const router = express.Router();
  router.get("/", getTests);
  router.post("/", setTest);
  router.delete("/:id", deleteTest);
  router.put("/:id", updateTest);
  module.exports = router;
  