const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please add new fields");
  }
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const user = await User.create({ name, email, password: hashedPassword });
  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      grade: user.grade
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
  res.json({ message: "Register User" });
});
const gradeUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) {
      res.status(400);
      throw new Error("User not found");
    }
   
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if(req.body.grade== 100){
        const body = updatedUser
        res.status(200).json({ ...req.body, token: generateToken(req.body._id) });
    }else{
        res.status(200).json( updatedUser );
    }
    
});
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    let returnMsg = { _id: user.id, name: user.name, email: user.email, grade: user.grade };
    if (user.grade == 100) {
      res.status(201).json({ ...returnMsg, token: generateToken(user._id) });
    } else {
      res.status(201).json(returnMsg);
    }
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }

  res.json({ message: "Login User" });
});
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

module.exports = { registerUser, gradeUser, loginUser };
