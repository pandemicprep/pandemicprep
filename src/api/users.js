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

export async function guestUser(guest) {
  try {
    const { data: newGuest } = await axios.post('/api/users/guest', guest)
    return newGuest;
  } catch (error) {
    console.error(error);
  }
}

//Update User
export async function updateUser(fields = {}, token) {
  try {
    const { data } = await axios.patch('/api/users/', fields, { headers: { Authoriation: "Bearer " + token } });
    //MAY NEED TO EDIT THE RETURN
    return data
  } catch (error) {
    throw error;
  }
}

/**
 * Logs into account
 * @param {Object} {requires email, password} 
 */
export async function loginUser(credentials) {
  console.log('getting to the axios call');
  try {
    const { data: user } = await axios.post('/api/users/login', credentials);
    console.log('getting from the back end ', user);
    return user;
  } catch (error) {
      throw error;
  }
}

export async function getUserFromToken(token) {
  try {
      const { data: user } = await axios.get('/api/users/verify', { headers: { authorization: "Bearer " + token}});
      user.token = token;
      console.log('user from the api ', user);
      return user;
  } catch (error) {
    console.error(error);
  }
}