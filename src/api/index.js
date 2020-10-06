/** @format */


//EXPORTS ALL API FUNCTIONS

export { 
    getAllUsers, 
    getAllProducts, 
    getAllProcessing, 
    updateProduct, 
    adminUpdateUser, 
    completeOrder
} from './admin'



export { addUser, updateUser, loginUser, guestUser } from "./users";
export { getProductsByQuery, addNewProduct } from "./products";
export { addNewCart } from "./orders";
export { addProductToCart, removeProductFromCart, deactivateCart, patchCartItemQuantity } from "./cart";
export { fetchNews } from './news'
