
const { 
    addProduct,
    getAllProducts,
    getProductsByQuery
} = require('./singletables/products');

const { 
    addUser,
    getAllUsers
} = require('./singletables/users');

const productArray = require('./singletables/productObject')



async function seed() {
    //creating a new user
    try {
        console.log('creating user one');
        const user1 = await addUser({
            firstName: 'Nicolas',
            lastName: 'Olivares',
            isAdmin: true,
            isUser: true,
            email: 'myemail@you.com',
            password: 'mypassword',
            addressLine1: '4545 street',
            addressLine2: '',
            city: 'Jax',
            state: 'Fl',
            zipcode: '32210',
            country: 'USA',
            phone: '555-555-5555',
            creditCard: 45454545454545455,

        });
        console.log('this is user 1 ', user1);

        console.log('creating user two, login in with minimum info ');
        const user2 = await addUser({
            firstName: 'Joe',
            lastName: 'Moe',
            isAdmin: null,
            isUser: null,
            email: 'myemail2@you.com',
            password: 'password',
            addressLine1: null,
            addressLine2: null,
            city: null,
            state: null,
            zipcode: null,
            country: null,
            phone: null,
            creditCard: null,
        });
        console.log('user2 with minimum data ', user2);

        console.log('creating user three, login in with minimum info and repeated email ');
        const user3 = await addUser({
            firstName: 'Joe',
            lastName: 'Moe',
            isAdmin: null,
            isUser: null,
            email: 'myemail2@you.com',
            password: 'password',
            addressLine1: null,
            addressLine2: null,
            city: null,
            state: null,
            zipcode: null,
            country: null,
            phone: null,
            creditCard: null,
        });
        console.log('user3 with minimum data ', user3);
        
        console.log('creating user four, missing info ');
        const user4 = await addUser({
            firstName: 'Joe',
            lastName: 'Moe',
            isAdmin: null,
            isUser: null,
			email: null,
			password: 'password',
            addressLine1: null,
            addressLine2: null,
			city: null,
			state: null,
			zipcode: null,
			country: null,
			phone: null,
            creditCard: null,
        });
        console.log('user4 with minimum data ', user4);

        console.log('Running getAllUsers...');
        const allUsers = await getAllUsers();
        console.log('all users result: ', allUsers);


        console.log('creating new product... ');
        const product = await addProduct({
            name: 'New Product Name',
            price: 999.99,
            description: 'new product description yay',
            imageURL: 'www.imageurl.com/urlurlurl',
            category: ''
        });
        console.log('ADD NEW PRODUCT TEST', product);

        console.log('Adding all products in product array to db...');
        await Promise.all(productArray.map(async (product) => {
          const { name, price, description, imageURL, category} = product

          await addProduct({
              name,
              price,
              description,
              imageURL,
              category
          });
         }));
        console.log('Exiting all products seed loop...');

        // console.log('Running get all products...');
        // const allProducts = await getAllProducts();
        // console.log('Result: ', allProducts);

        console.log('getting products by query...');
        const allProductsByQuery = await getProductsByQuery("desk");
        console.log('Result: ', allProductsByQuery);


    } catch (error) {
        throw error;
    }
}

module.exports = { seed };
