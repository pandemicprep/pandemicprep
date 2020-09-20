import axios from 'axios';

/**
 * gets a list of users
 * will require the user is admin later on
 */

export async function getAllUsers() {
    try {
      const { data } = await axios.get('/api/users');
      console.log('all users in src api index: ', data);
      return data;
    } catch (error) {
      throw error;
    }
  }