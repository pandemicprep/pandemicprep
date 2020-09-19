import axios from 'axios';

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