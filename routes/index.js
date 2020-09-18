const apiRouter = require('express').Router();

const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;


apiRouter.use((req, res, next) => {
  console.log('api entry point');

next();

});


const usersRouter = require('./users');
apiRouter.use('/users', usersRouter);


module.exports = apiRouter;
