/** @format */

import axios from 'axios';

/**
 * Creates a new user (registration)
 * @param {Object} {requires firstName, lastName, email, may have more}
 */
export async function addUser(user) {
	try {
		const { data: newUser } = await axios.post('/api/users/register', user);
		return newUser;
	} catch (error) {
		throw error;
	}
}

/**
 * For Guest info to be stored in the DB
 * @param {object} guest
 */
export async function guestUser(guest) {
	try {
		const { data: newGuest } = await axios.post('/api/users/guest', guest);
		return newGuest;
	} catch (error) {
		console.error(error);
	}
}

/**
 * Update User
 * @param {object} fields
 * @param {string} token
 */
export async function updateUser(fields = {}, token) {
	try {
		const { data } = await axios.patch('/api/users/', fields, {
			headers: { Authorization: 'Bearer ' + token },
		});
		//MAY NEED TO EDIT THE RETURN
		return data;
	} catch (error) {
		throw error;
	}
}

/**
 * Logs into account
 * @param {Object} {requires email, password}
 */
export async function loginUser(credentials) {
	
	try {
		const { data: user } = await axios.post('/api/users/login', credentials);
		
		return user;
	} catch (error) {
		throw error;
	}
}

/**
 * Gets User from Token
 * @param {string} token
 */
export async function getUserFromToken(token) {
	try {
		const { data: user } = await axios.get('/api/users/verify', {
			headers: { authorization: 'Bearer ' + token },
		});
		user.token = token;

		return user;
	} catch (error) {
		console.error(error);
	}
}

export async function getFullUserFromToken(id, token) {
	try {
		const { data: user } = await axios.get(`/api/users/${id}`, {
			headers: { authorization: 'Bearer ' + token },
		});
		user.token = token;

		return user;
	} catch (error) {
		console.error(error);
	}
}
