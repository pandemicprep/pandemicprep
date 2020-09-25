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
  console.log('getting to the axios call');
  try {
    const { data: token } = await axios.post('/api/users/login', credentials);
    console.log('getting from the back end ', token);
    return token;
  } catch (error) {
      throw error;
  }
}