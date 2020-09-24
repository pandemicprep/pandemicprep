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