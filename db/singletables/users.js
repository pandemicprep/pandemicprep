const { client } = require("../client");

const bcrypt = require("bcrypt");

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
  addressLine1 = "",
  addressLine2 = "",
  city = "",
  state = "",
  zipcode = "",
  country = "",
  phone = null,
  creditCard = null,
}) {

	console.log('getting to addUser at the back end ');
	const SALT_COUNT = 15;
	let sercuredPassword = null;
	
	try {
		if (email) {
			if (password) {
			bcrypt.hash(password, SALT_COUNT, async (err, hashedPassword) => {
				securedPassword = hashedPassword;
				});
			}
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
				securedPassword,
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
        return { message: "email, phone, or credit card already exists" }; //See if need to change later
      }
    } else {
      return { message: "must enter unique email" };
    }
  } catch (error) {
    throw error;
  }
}

//retrieve a user (check if admin)

// retrieve all user
async function getAllUsers() {
  try {
    const { rows } = await client.query(`
			SELECT * FROM users;
		`);

    // console.log('all users: ', rows);
    return rows;
  } catch (error) {
    throw error;
  }
}

//patch a user
async function updateUser({
  id,
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
}) {
  try {
    const { rows } = await client.query(
      `
    	UPDATE users
    	SET "isAdmin" = $2, "isUser" = $3, email = $4,
    	password = $5, "firstName" = $6, "lastName" = $7,
    	"addressLine1" = $8, "addressLine2" = $9, city = $10, state = $11,
    	zipcode = $12, country = $13, phone = $14, "creditCard" = $15
		WHERE id = $1
		RETURNING *;
    	`,
      [
        id,
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
      ]
    );
    return rows;
  } catch (error) {
    throw error;
  }
}

async function getUserById(id) {
  try {
    const {
      rows: [user],
    } = await client.query(
      `
		SELECT * FROM users
		WHERE id = $1;`,
      [id]
    );
    return user;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  addUser,
  getAllUsers,
  updateUser,
  getUserById,
};
