const { client } = require('../client');

const bcrypt = require('bcrypt');


/**
 * Create new user by registration (first, last, email, pass minimum),
 * by guest purchase (all fields except for password),
 * @param {Object} {requires firstName, lastName, email}
 * returns a single object with { id, firstName, lastName, isAdmin, isUser, email, password, 
 * addressLine1, addressLine2, city, state, zipcode, country, phone, creditcard } or
 * an object with an error message { message: 'the error' } 
 */
async function addUser({
	firstName,
	lastName,
	isAdmin = false,
	isUser = false,
	email = null,
	password = null,
	addressLine1 = '',
	addressLine2 = '',
	city = '',
	state = '',
	zipcode = '',
	country = '',
	phone = null,
	creditCard = null,
	
}) {
	console.log('getting to addUser at the back end ');
	try {
		if (email) {
		const {
			rows: [newUser],
		} = await client.query(
			`
            INSERT INTO users("isAdmin", "isUser", email, password, "firstName", "lastName", "addressLine1", "addressLine2", city, state, zipcode, country, phone, "creditCard")
            VALUES ($1, $2 ,$3 ,$4 ,$5 ,$6 ,$7 ,$8 ,$9 ,$10 ,$11 ,$12 ,$13, $14)
            ON CONFLICT DO NOTHING
            RETURNING *;
        `,
			[
				isAdmin,
				isUser,
				email,
				password,
				firstName,
				lastName,
				addressLine1,
				addressLine2,
				city,
				state,
				zipcode,
				country,
				phone,
				creditCard,
			],
		);

		if (newUser) {
		return newUser;
		} else {
			return {message: 'email, phone, or credit card already exists'};			//See if need to change later
		}
	} else {
		return {message: 'must enter unique email'}
	}
	} catch (error) {
		throw error;
	}
}

//retrieve a user (check if admin)

//patch a user

module.exports = { addUser };
