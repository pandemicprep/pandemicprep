const apiRouter = require('express').Router();

apiRouter.get("/products", (req, res, next) => {
  res.status(200).json(require('./products.json'))
});

module.exports = apiRouter;
