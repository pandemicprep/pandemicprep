/** @format */
const Promise = require("bluebird");

const {
    addProductAndCategory,
    getAllProducts,
    getProductsByQuery,
    getProductById,
    getProductsByCategory,
    getAllProductsCart,
    getHighlightedProducts,
} = require("./singletables/products");

const { addUser, getAllUsers, updateUser, getUserById } = require("./singletables/users");

const { categoryIdByName, getAllCategories } = require("./singletables/categories");

const productArray = require("./singletables/productObject");

const {
    addCart,
    getCartHistoryStatusAdmin,
    getCartHistoryStatus,
    addProductToCart,
} = require("./singletables/cart");

const { addReview, getReviewsByProductId } = require("./singletables/reviews");

//
//
//
//TEST CASES & SEED DATA TO TEST DATABASE FUNCTIONS
//
//
//

async function seed() {
    try {
        await createNewUsers();
        // await gettingAllUsers();
        // await creatingOneNewProduct();
        await seedingProductObject();
        await gettingProductsByQuery();
        // await updatingUsers();
        // await gettingUserById();
        // await gettingCategoryIdsByName();
        // await addingOneCart();
        // await seedingInitialReviews();
        // await gettingSeedReviewsByProduct();
        // await gettingAllCategories();
        // await gettingProductById();
        // await gettingProductsByCategory();
        // await makingProductCart();
        const allProducts = await getAllProducts(1);
    } catch (error) {
        throw error;
    }
}

async function createNewUsers() {
    try {
        //creating a new user

        const user1 = await addUser({
            firstName: "Nicolas",
            lastName: "Olivares",
            isAdmin: true,
            isUser: true,
            email: "myemail@you.com",
            password: "Password1",
            addressLine1: "4545 street",
            addressLine2: "",
            city: "Jax",
            state: "Fl",
            zipcode: "32210",
            country: "USA",
            phone: "555-555-5555",
            creditCard: 45454545454545455,
        });

        const user2 = await addUser({
            firstName: "Joe",
            lastName: "Moe",
            isAdmin: false,
            isUser: true,
            email: "myemail2@you.com",
            password: "Password2",
            addressLine1: null,
            addressLine2: null,
            city: null,
            state: null,
            zipcode: null,
            country: null,
            phone: null,
            creditCard: null,
        });

        const user3 = await addUser({
            firstName: "Joe",
            lastName: "Moe",
            isAdmin: false,
            isUser: true,
            email: "myemail3@you.com",
            password: "Password3",
            addressLine1: null,
            addressLine2: null,
            city: null,
            state: null,
            zipcode: null,
            country: null,
            phone: null,
            creditCard: null,
        });

        const user4 = await addUser({
            firstName: "Joe",
            lastName: "Moe",
            isAdmin: false,
            isUser: true,
            email: "myemail4@you.com",
            password: "not",
            addressLine1: null,
            addressLine2: null,
            city: null,
            state: null,
            zipcode: null,
            country: null,
            phone: null,
            creditCard: null,
        });
    } catch (error) {
        throw error;
    }
}

async function gettingAllUsers() {
    try {
        const allUsers = await getAllUsers();
    } catch (error) {
        throw error;
    }
}

async function seedingProductObject() {
    const length = productArray.length;
    try {
        await Promise.mapSeries(productArray, function (
            { name, price, description, image, category, isHighlighted = false },
            index,
            length
        ) {
            image = "/" + image;
            const newProduct = addProductAndCategory({
                name,
                price,
                description,
                image,
                category,
                isHighlighted,
            });

            return newProduct;
        });
    } catch (error) {
        throw error;
    }
}

async function gettingProductsByQuery() {
    try {
        const allProductsByQuery = await getProductsByQuery("desk", 1);
    } catch (error) {
        throw error;
    }
}

async function updatingUsers() {
    try {
        const user2 = await updateUser({
            id: 2,
            isAdmin: false,
            isUser: true,
            email: "myemail2@you.com",
            password: "Password2",
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
    } catch (error) {
        throw error;
    }
}

async function gettingUserById() {
    try {
        const user = await getUserById(1);
    } catch (error) {
        throw error;
    }
}



async function addingOneCart() {
    try {
        const newCart = await addCart({
            status: "active",
            lastUpdated: "09-22-2020",
            total: 99.99,
            userId: 1,
        });
        const cart2 = await addCart({
            status: "shipped",
            lastUpdated: "09-23-2020",
            total: 9.99,
            userId: 1,
        });
        const cart3 = await addCart({
            status: "processing",
            lastUpdated: "09-24-2020",
            total: 29.99,
            userId: 1,
        });
        const cart4 = await addCart({
            status: "cancelled",
            lastUpdated: "09-25-2020",
            total: 19.99,
            userId: 2,
        });
    } catch (error) {
        throw error;
    }
}

async function gettingNonActiveCartAdmin() {
    try {
        const history = await getCartHistoryStatusAdmin();
    } catch (error) {
        throw error;
    }
}

async function gettingNonActiveCart() {
    try {
        // const id = await getUserById(2);
        const userHistory = await getCartHistoryStatus(2);
    } catch (error) {
        throw error;
    }
}

async function seedingInitialReviews() {
    try {
        await addReview({
            creatorId: 1,
            productId: 1,
            score: 5,
            description: "Very pleased with this product!",
        });

        await addReview({
            creatorId: 1,
            productId: 5,
            score: 3,
            description: "Pleased",
        });

        await addReview({
            creatorId: 2,
            productId: 30,
            score: 1,
            description: "Very disappointed!",
        });

        await addReview({
            creatorId: 2,
            productId: 5,
            score: 5,
            description: "Experience could not have been better!",
        });
    } catch (error) {
        throw error;
    }
}

async function gettingSeedReviewsByProduct() {
    try {
        const reviews = await getReviewsByProductId(5);

    } catch (error) {
        throw error;
    }
}

async function gettingAllCategories() {
    try {
        const categories = await getAllCategories();

    } catch (error) {
        throw error;
    }
}

async function gettingProductById() {
    try {
        const product = await getProductById(9);

    } catch (error) {
        throw error;
    }
}

async function gettingProductsByCategory() {
    try {
        const products = await getProductsByCategory("school", 1);
    } catch (error) {
        throw error;
    }
}

async function makingProductCart() {
    try {
        const productCart1 = await addProductToCart({
            productId: 2,
            cartId: 1,
            quantity: 4,
            unitPrice: 5.99,
        });
        const productCart2 = await addProductToCart({
            productId: 13,
            cartId: 2,
            quantity: 2,
            unitPrice: 199.99,
        });
        const productCart3 = await addProductToCart({
            productId: 4,
            cartId: 3,
            quantity: 45,
            unitPrice: 1.99,
        });

    } catch (error) {
        throw error;
    }
}

module.exports = { seed };
