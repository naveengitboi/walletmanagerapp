import userModel from "../models/user.model.js";
import bcrypt from "bcrypt";
import { generateToken } from "../middlewares/auth.js";
import asyncErrorHandler from "../utils/asynErrorHandler.js";

//sign in
const registerUser = asyncErrorHandler(async (req, res) => {
  const userData = req.body;
  console.log(userData.userName)
  const isUserExists = await userModel.findOne({ userName: userData.userName });
  if (isUserExists) {
    res.status(400).json({ success: false, output: "User already exists" })
    return;
  }

  const salts = 10;
  const hashedPwd = await bcrypt.hash(userData.password, salts);
  const dataModified = {
    ...userData,
    password: hashedPwd,
  };
  const newUser = new userModel(dataModified);
  const addedUser = await newUser.save();
  generateToken(res, { userId: addedUser._id });
  res.send("user added successfully");


});

//login
const loginUser = asyncErrorHandler(async (req, res) => {

  const isUserFound = await userModel.findOne({
    userName: req.body.userName,
  });
  if (isUserFound) {
    const isMatched = await bcrypt.compare(
      req.body.password,
      isUserFound.password
    );
    if (isMatched) {
      generateToken(res, { userId: isUserFound._id });
      res.status(200).json({ success: true, output: "Successfull log in" });
    } else {
      res
        .status(400)
        .json({ success: false, output: "Bad request or Wrong Credintials" });
    }
  } else {
    res.status(401).json({ success: false, output: "Unauthorized User" });
  }
});

//getAll users
const getAllUsers = asyncErrorHandler(async (req, res) => {
  const users = await userModel.find();
  res.status(200).json({ success: true, output: users });
});

//get one user
const getOwnUser = asyncErrorHandler(async (req, res) => {
  const id = req.userPayload;
  //  console.log(req)
  const user = await userModel.findById(id);
  res.status(200).json({ success: true, output: user });
});

//update userdetails
const updateUser = asyncErrorHandler(async (req, res) => {
  const id = req.userPayload;
  const userData = req.body;
  console.log(userData);

  const updatedData = {
    ...userData,
    phone: parseInt(userData.phone),
  };

  await userModel.findByIdAndUpdate(id, updatedData, {
    new: true,
  });
  res.status(200).json({ success: true, output: "updated successfully" });
});

const updatePassword = asyncErrorHandler(async (req, res) => {
  const id = req.userPayload;
  const userData = req.body;
  const hashedPwd = await bcrypt.hash(userData.password, salts);
  updatedData = {
    password: hashedPwd,
  };

  await userModel.findByIdAndUpdate(id, updatedData, {
    new: true,
  });

  res.status(200).json({ success: true, output: "updated successfully" });

});
//delete user account
const deleteUser = asyncErrorHandler(async (req, res) => {
  const id = req.userPayload;
  await userModel.findByIdAndDelete(id);
  res.status(200).json({ success: true, output: "user deleted" });
});

export {
  registerUser,
  loginUser,
  getAllUsers,
  updateUser,
  updatePassword,
  getOwnUser,
  deleteUser,
};
