/** @format */

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
    password = "",
    addressLine1 = "",
    addressLine2 = "",
    city = "",
    state = "",
    zipcode = "",
    country = "",
    phone = null,
    creditCard = null,
}) {
    console.log("getting to addUser at the back end ", password);
    const SALT_COUNT = 13;
    let securedPassword = null;
    let securedCreditCard = null;

    try {
        if (email) {
            if (password.length > 0) {
                securedPassword = await bcrypt.hash(password, SALT_COUNT);
            }
            if (creditCard > 0) {
                securedCreditCard = await bcrypt.hash("" + creditCard, SALT_COUNT);
            }
            console.log("last check of secured password ", securedPassword);
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
                    securedCreditCard,
                ]
            );

            if (newUser) {
                return newUser;
            } else {
                return { message: "email or credit card already exists" }; //See if need to change later
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

async function updateUser(id, fields = {}) {
    // build the set string
    const setString = Object.keys(fields)
        .map((key, index) => `"${key}"=$${index + 1}`)
        .join(", ");
    // return early if this is called without fields
    if (setString.length === 0) {
        return;
    }
    try {
        const {
            rows: [users],
        } = await client.query(
            `
      UPDATE users
      SET ${setString}
      WHERE id=${id}
      RETURNING *;
    `,
            Object.values(fields)
        );

        return users;
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
        if (user) {
            return user;
        } else {
            return { message: "no user by that id" };
        }
    } catch (error) {
        throw error;
    }
}

async function getUserByEmail(email) {
    try {
        const {
            rows: [user],
        } = await client.query(
            `
        SELECT *
        FROM users
        WHERE email=$1;
        `,
            [email]
        );
        if (user) {
            return user;
        } else {
            return { message: "no user by that email" };
        }
    } catch (error) {
        throw error;
    }
}

module.exports = {
    addUser,
    getAllUsers,
    updateUser,
    getUserById,
    getUserByEmail,
};
