const express = require('express');
const usersRouter = express.Router();
const jwt = require('jsonwebtoken');


const {
	addUser,
    } = require('../db');
    
    usersRouter.post('/register', async (req, res, next) => {
        const user = req.body;
        console.log('got into router', user);
        try {
        const newUser = await addUser(user);
        console.log('new user ', newUser);
            res.send(newUser);
        } catch (error) {
            throw error;
        }
    
    });

    module.exports = usersRouter;