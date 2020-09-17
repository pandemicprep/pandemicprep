const { addUser } = require('./users');

async function seed() {
	//creating a new user
	console.log('creating user one');
	const user1 = await addUser({
		firstName: 'Nicolas',
		lastName: 'Olivares',
		isAdmin: true,
        email: 'myemail@you.com',
        password: 'mypassword',
        street: '4545 street',
        city: 'Jax',
        state: 'Fl',
        zipcode: '32210',
        country: 'USA',
        phone: '555-555-5555',
        creditCard: 45454545454545455,
        cartId: 1
    });
    console.log('this is user 1 ', user1);
}

module.exports = { seed };
