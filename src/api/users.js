import axios from 'axios';

/**
 * Creates a new user
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