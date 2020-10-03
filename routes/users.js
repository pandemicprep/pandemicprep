/** @format */

const express = require("express");
const usersRouter = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const {
    addUser,
    getAllUsers,
    updateUser,
    getUserById,
    getUserByEmail,
} = require("../db/singletables/users");
const { getActiveCart } = require('../db');

usersRouter.post("/register", async (req, res, next) => {
    const user = req.body;
    console.log("got into user router registration ", user);
    try {
        const newUser = await addUser(user);
        console.log("new user ", newUser);
        if (newUser.message) {
            res.send(newUser);
        } else {
            const token = jwt.sign(
                {
                    id: newUser.id,
                    isAdmin: newUser.isAdmin,
                    isUser: newUser.isUser,
                    firstName: newUser.firstName,
                },
                process.env.JWT_SECRET,
                {
                    expiresIn: "1w",
                }
            );
            res.send({
                id: newUser.id,
                firstName: newUser.firstName,
                isAdmin: newUser.isAdmin,
                isUser: newUser.isUser,
                activeCart: newUser.activeCart,
                token: token,
            });
        }
    } catch (error) {
        throw error;
    }
});

usersRouter.post("/login", async (req, res, next) => {
    const SALT_COUNT = 13;
    const { email, password } = req.body;

    try {
        const user = await getUserByEmail(email);
        if (user.message) {
            res.send(user);
        } else {
            const validated = await bcrypt.compare(password, user.password);
            if (validated) {
                const token = jwt.sign(
                    {
                        id: user.id,
                        isAdmin: user.isAdmin,
                        isUser: user.isUser,
                        firstName: user.firstName,
                    },
                    process.env.JWT_SECRET,
                    {
                        expiresIn: "1w",
                    }
                );
                res.send({
                    id: user.id,
                    firstName: user.firstName,
                    isAdmin: user.isAdmin,
                    isUser: user.isUser,
                    activeCart: user.activeCart,
                    token: token,
                });
            }
        }
    } catch (error) {
        throw error;
    }
});

usersRouter.post("/guest", async (req, res, next) => {
    const guest = req.body;
    console.log("got into user router guest ", guest);
    try {
        const newGuest = await addUser(guest);
        console.log("new guest ", newGuest);
        if (newGuest.message) {
            res.send(newGuest);
        } else {
            res.send(newGuest);
        }
    } catch (error) {
        throw error;
    }
});

usersRouter.get("/verify", async (req, res, next) => {
    console.log("getting to verify with ", req.user);
    try {
        const activeCart = await getActiveCart(req.user.id);
        res.send({
            id: req.user.id,
            firstName: req.user.firstName,
            isAdmin: req.user.isAdmin,
            isUser: req.user.isUser,
            activeCart: activeCart
        });
    } catch (error) {
        throw error;
    }
});

// update user by id
usersRouter.patch("/", async (req, res, next) => {
    try {
        console.log("entering update user by id route...");
        const fields = req.body;
        const id = req.user.id;
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
        const id = req.params.userId;
        const getUser = await getUserById(id);
        console.log("getting user by id....", getUser);
        res.send(getUser);
    } catch (error) {
        throw error;
    }
});

module.exports = usersRouter;
