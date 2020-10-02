import axios from 'axios';

/**
 * gets a list of users
 * will require the user is admin later on
 */

export async function getAllUsers(pageNumber) {
    try {
      const { data } = await axios.get(`/api/users/${pageNumber}`);
      console.log('all users in src api index: ', data);
      return data;
    } catch (error) {
      throw error;
    }
}

export async function getAllProducts(pageNumber) {
  try {
    const { data } = await axios.get(`/api/admin/${pageNumber}`);

    return data;
  } catch (error) {
    throw error;
  }
}

export async function updateProduct(id, fields = {}) {
  try {
    const { data } = await axios.patch('/', id, fields);

    return data;
  } catch (error) {
    throw error;
  }
}