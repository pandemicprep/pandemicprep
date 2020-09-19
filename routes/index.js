const apiRouter = require('express').Router();

const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;


apiRouter.use((req, res, next) => {
  console.log('api entry point');
  const prefix = 'Bearer ';
	const auth = req.header('Authorization');

	if (!auth) {
		// nothing to see here
		next();
	} else if (auth.startsWith(prefix)) {
		const token = auth.slice(prefix.length);

		try {
			const { id } = jwt.verify(token, JWT_SECRET);

			if (id) {
        req.user = await getUserById(id);
        req.verified = true;
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


module.exports = apiRouter;
