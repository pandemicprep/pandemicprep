const apiRouter = require('express').Router();
const { getUserById } = require ('../db/');

const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;


apiRouter.use(async (req, res, next) => {
  console.log('api entry point with ', req.headers.authorization);
  const prefix = 'Bearer ';
	const auth = req.headers.authorization;

	if (!auth) {
		// nothing to see here
		next();
	} else if (auth.startsWith(prefix)) {
		const token = auth.slice(prefix.length);

		try {
			const { id, isAdmin, isUser } = jwt.verify(token, JWT_SECRET);

			if (id) {
		req.user = await getUserById(id);     
				console.log('route entry point user is', req.user);
				next();
			}
		} catch ({ name, message }) {
			next({ name, message });
		}
	} else {
		next({
			name: 'AuthorizationHeaderError',
			message: `Authorization token must start with ${prefix}`,
		});
	}

});


const usersRouter = require('./users');
apiRouter.use('/users', usersRouter);

const productsRouter = require('./products');
apiRouter.use('/products', productsRouter);

const ordersRouter = require('./orders');
apiRouter.use('/orders', ordersRouter);

const reviewsRouter = require('./reviews');
apiRouter.use('/reviews', reviewsRouter);

const categoriesRouter = require('./categories');
apiRouter.use('/categories', categoriesRouter);

module.exports = apiRouter;
