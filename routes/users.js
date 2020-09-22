const express = require("express");
const usersRouter = express.Router();
const jwt = require("jsonwebtoken");

const {
  addUser,
  getAllUsers,
  updateUser,
  getUserById,
} = require("../db/singletables/users");

usersRouter.post("/register", async (req, res, next) => {
  const user = req.body;
  console.log("got into router", user);
  try {
    const newUser = await addUser(user);
    console.log("new user ", newUser);
    res.send(newUser);
  } catch (error) {
    throw error;
  }
});

// get all users
usersRouter.get("/", async (req, res, next) => {
  try {
    console.log("entering users get router");
    const allUsers = await getAllUsers();
    console.log("all users: ", allUsers);

    res.send(allUsers);
  } catch (error) {
    throw error;
  }
});

// update user by id
usersRouter.patch("/:userId", async (req, res, next) => {
  try {
    console.log("entering update user by id route...");
    const fields = req.body
    const id = req.params.userId
    const updateUserById = await updateUser(id, fields);
    console.log("updated userId:", updateUserById);
    res.send(updateUserById);

  } catch (error) {
    throw error;
  }
});

//get user by id
usersRouter.get("/:userId", async (req, res, next) => {
  try {
    console.log("entering getting user by id route...");
    const id = req.params.userId
    const getUser = await getUserById(id);
    console.log("getting user by id....", getUser);
    res.send(getUser);

  } catch (error) {
    throw error;
  }
});


module.exports = usersRouter;
