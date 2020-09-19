const { client } = require('../client');

/**
 * addProduct => add product, 
 * then add category, 
 * then add products_categories
 *  For adding category: first try to get category by name.
 *  If you get it, use that id, don’t add. If you don’t get anything, then add
 * For the products_categories you’ll use the id of the product and the id of the category
 */


async function addProduct({
    name,
    price,
    description,
    imageURL,
    category

}) {
    try {
        const {
            rows: [newProduct],
        } = await client.query(
            `
            INSERT INTO products (title, price, description, image)
            VALUES ($1, $2, $3, $4)
            ON CONFLICT DO NOTHING
            RETURNING *;
        `,
            [
                name,
                price,
                description,
                imageURL,
            ],
        );



        if (newProduct) {
            return newProduct;
        } else {
            return { message: 'Unable to add new Product' };
        }

    } catch (error) {
        throw error;
    }
}

// gets all products
async function getAllProducts() {
    try {
        const {
            rows
        } = await client.query(`
            SELECT * FROM products;
        `);

        return rows;
    } catch (error) {
        throw error;
    }
}



module.exports = { addProduct, getAllProducts };

