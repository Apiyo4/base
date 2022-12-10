const express = require("express");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./backend/middleware/errorMiddleware");
const connectDB = require("./backend/config/db");
const port = process.env.PORT;
connectDB();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/questions", require("./backend/routes/questionRouter"));
app.use("/api/tests", require("./backend/routes/testRouter"));
app.use(errorHandler);
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
