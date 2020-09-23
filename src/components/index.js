/** @format */

// node to send all the exports into and to get all the exports out of just one place

//App
export { default as App } from "./App";

//api/index
export { 
    addUser,
    getAllUsers,
    getProductsByQuery,
    addNewProduct
} from '../api';


//main body
export { MainBody } from "./pages/body/MainBody";

//admin
export { Ordersactive } from './pages/body/admin/Ordersactive';
export { Sales } from './pages/body/admin/Sales';
export { Userlist } from './pages/body/admin/Userlist';

//categories
export { Categories } from "./pages/body/categories/Categories";

//orders
export { Cart } from './pages/body/orders/Cart';
export { Orders } from './pages/body/orders/Orders';

//products
export { Product } from './pages/body/products/Product';
export { Productlist } from './pages/body/products/Productlist';
export { AddProduct } from './pages/body/products/AddProduct';

//user
export { Checkout } from './pages/body/user/Checkout';
export { Login } from "./pages/body/user/Login";
export { Profile } from "./pages/body/user/Profile";

//header and footer
export { Header } from "./pages/header/Header";
export { Footer } from "./pages/footer/Footer";

//utils
export { states, countries } from './utils';

