const client = require('../client');

const bcrypt = require('bcrypt');
const { useReducer } = require('react');

//add a user
async function addUser({
	firstName,
	lastName,
	isAdmin,
	email,
	password,
	street,
	city,
	state,
	zipcode,
	country,
	phone,
	creditCard,
	cartId,
}) {
	try {
		const {
			rows: [newUser],
		} = await client.query(
			`
            INSERT INTO users("isAdmin", email, password, "firstName", "lastName", street, city, state, zipcode, country, phone, "creditCard", "cartId")
            VALUES ($1, $2 ,$3 ,$4 ,$5 ,$6 ,$7 ,$8 ,$9 ,$10 ,$11 ,$12 ,$13)
            ON CONFLICT DO NOTHING
            RETURNING *;
        `,
			[
				isAdmin,
				email,
				password,
				firstName,
				lastName,
				street,
				city,
				state,
				zipcode,
				country,
				phone,
				creditCard,
				cartId,
			],
        );
        
        return newUser;
	} catch (error) {
		throw error;
	}
}

//retrieve a user (check if admin)

//patch a user


module.exports = { addUser };