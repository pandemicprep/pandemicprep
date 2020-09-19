import axios from 'axios';

/**
 * gets a list of users
 * will require the user is admin later on
 */

export async function getAllUsers() {
  try {
    const { data } = await axios.get('/api/users');
    console.log('all usersin src api index: ', data);
    return data;
  } catch (error) {
    throw error;
  }
}

// export async function getSomething() {
//   try {
//     const { data } = await axios.get('/api/products');
//     return data;
//   } catch (error) {
//     throw error;
//   }
// }

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

