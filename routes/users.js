const express = require('express');
const usersRouter = express.Router();
const jwt = require('jsonwebtoken');


const {
	addUser,
    } = require('../db');
    
    usersRouter.post('/register', async (req, res, next) => {
        const user = req.body;
        console.log('got into router');
        try {
        const newUser = await addUser(user);
            res.send(newUser);
        } catch (error) {
            throw error;
        }
    
    });

    module.exports = usersRouter;