
/** @format */




const { 
    addProductAndCategory,
    getAllProducts,
    getProductsByQuery
} = require('./singletables/products');

const {
  addUser,
  getAllUsers,
  updateUser,
  getUserById,
} = require("./singletables/users");

const { categoryIdByName, addCategory } = require('./singletables/categories')



const productArray = require('./singletables/productObject')


async function seed() {
try {
    
    await createNewUsers();
    // await gettingAllUsers();
    // await creatingOneNewProduct();
    await seedingProductObject();
    // await gettingProductsByQuery();
    // await updatingUsers();
    // await gettingUserById();
    // await gettingCategoryIdsByName();
    await addingNewCategory();
        


        // console.log('Running get all products...');
        // const allProducts = await getAllProducts();
        // console.log('Result: ', allProducts);

  } catch (error) {
    throw error;
  }


}

async function createNewUsers() {
    try {
//creating a new user

    console.log('creating user one');
    const user1 = await addUser({
        firstName: 'Nicolas',
        lastName: 'Olivares',
        isAdmin: true,
        isUser: true,
        email: 'myemail@you.com',
        password: 'Password1',
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
        password: 'Password2',
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
        password: 'Password3',
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
    } catch (error) {
        throw error;
    }
}

async function gettingAllUsers() {
    try {
        console.log('Running getAllUsers...');
        const allUsers = await getAllUsers();
        console.log('all users result: ', allUsers);
    } catch (error) {
        throw error;
    }
}

async function creatingOneNewProduct() {
    try {
        console.log('creating new product... ');

        const product = await addProductAndCategory({
            name: 'New Product Name',
            price: 999.99,
            description: 'new product description yay',
            image: 'www.imageurl.com/urlurlurl',

            category: 'bath'
        });
        
    } catch (error) {
        throw error;
    }
}

async function seedingProductObject() {
    
        console.log('Adding all products in product array to db...');

        productArray.forEach(({name, price, description, image, category}) => {
            addProductAndCategory({name, price, description, image, category}).then((result) => {
                console.log('the new product', result);
            })
        });




        // await Promise.all(productArray.map(async (product) => {
        //   const { name, price, description, image, category} = product
        
        //   const newProduct = await addProductAndCategory({
        //       name,
        //       price,
        //       description,
        //       image,
        //       category
        //   });
        //   console.log('the new product ', newProduct);
        //  }));
        // console.log('Exiting all products seed loop...');

    
}

async function gettingProductsByQuery() {
    try {
        console.log('getting products by query...');
        const allProductsByQuery = await getProductsByQuery("desk");
        console.log('Result: ', allProductsByQuery);
    } catch (error) {
        throw error;
    }
}

async function updatingUsers() {
    try {
        console.log("Updating User 2...");
        const user2 = await updateUser({
          id: 2,
          isAdmin: false,
          isUser: true,
          email: "myemail2@you.com",
          password: "password",
          firstName: "Joe",
          lastName: "Moe",
          addressLine1: "1234 Anywhere",
          addressLine2: null,
          city: "Anywhere",
          state: "Florida",
          zipcode: "12345",
          country: null,
          phone: "123-456-7890",
          creditCard: 1234567891234567,
        });
        console.log("Updated User2", user2);
    } catch (error) {
        throw error;
    }
}

async function gettingUserById() {
    try {
        console.log("Getting User By Id...");
        const user = await getUserById(1);
        console.log("Got user by id 1", user);
    
        
    } catch (error) {
        throw error;
    }
}

async function gettingCategoryIdsByName() {
    try {
        console.log('getting category ids by name');
        console.log('getting bath id ', await categoryIdByName('bath'));
        console.log('getting car id by name (non existent) ', await categoryIdByName('car'));
    } catch (error) {
        throw error;
    }
}

async function addingNewCategory() {
    try {
        console.log('Adding new categories');
        console.log('Category outdoors ', await addCategory('outdoors'));
        console.log('Category outdoors (repeated) ', await addCategory('outdoors'));
        console.log('Category food ', await addCategory('food'));
    } catch (error) {
        throw error;
    }
}




module.exports = { seed };
