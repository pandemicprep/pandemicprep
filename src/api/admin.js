import axios from 'axios';

/**
 * Gets All Users (ADMIN)
 * @param {integer} pageNumber 
 * @param {string} token 
 */
export async function getAllUsers(pageNumber, token) {
  try {
    const { data } = await axios.get(`/api/admin/users/${pageNumber}`, { headers: { Authorization: 'Bearer ' + token } });
    return data;
  } catch (error) {
    throw error;
  }
}

/**
 * Gets All Products (ADMIN)
 * @param {integer} pageNumber 
 * @param {string} token 
 */
export async function getAllProducts(pageNumber, token) {
  try {
    const { data } = await axios.get(`/api/admin/products/${pageNumber}`, { headers: { Authorization: 'Bearer ' + token } });

    return data;
  } catch (error) {
    throw error;
  }
}

/**
 * Updates Product (ADMIN)
 * @param {object} param0 
 */
export async function updateProduct({ id, fields, token }) {
  try {

    const { data } = await axios.patch('/api/admin/product', {id, fields}, {headers: {Authorization: 'Bearer ' + token}});


    return data;
  } catch (error) {
    throw error;
  }
}

export async function adminUpdateUser({id, fields, token}) {
  try {
    
    const { data } = await axios.patch('/api/admin/user', {id, fields}, {headers: {Authorization: 'Bearer ' + token}});
    console.log('getting into user patch axios for admin', data)
    return data;
  } catch (error) {
    throw error;
  }
}