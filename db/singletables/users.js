const { client } = require('../client');

const bcrypt = require('bcrypt');


//add a user
async function addUser({
	firstName,
	lastName,
	isAdmin = false,
	isUser = false,
	email,
	password,
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
			return null;			//See if need to change later
		}
	} catch (error) {
		throw error;
	}
}

//retrieve a user (check if admin)

//patch a user

module.exports = { addUser };
