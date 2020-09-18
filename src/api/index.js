import axios from 'axios';

export async function getSomething() {
  try {
    const { data } = await axios.get('/api/products');
    return data;
  } catch (error) {
    throw error;
  }
}

export async function addUser(user) {
  try {
    const newUser = await axios.post('/api/register', user);
    return newUser;
  } catch (error) {
      throw error;
  }
}