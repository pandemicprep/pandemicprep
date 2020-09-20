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
        // add the product
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


        // const { 
        //     rows: [newCategory]
        // } = await client.query(`
        //     INSERT INTO categories (name)
        //     VALUES ($1)
        //     ON CONFLICT DO NOTHING
        //     RETURNING *;
        // `, [category]);

        // console.log('new category: ', newCategory);

        // 
        // const {
        //     rows
        // } = await client.query(`
        //     SELECT * 
        //     FROM products 
        //     JOIN products_categories ON products.id=products_categories."productId"
        //     JOIN products_categories ON categories.id=products_categories."categoryId";
        // `);

        // console.log('newProductCategory: ', rows)


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

// gets specific products by a search query
async function getProductsByQuery(query) {
    try {
        console.log('entering products query in db...')
        console.log('query: ', query)

        const uppercaseQuery = query.charAt(0).toUpperCase() + query.slice(1);
        console.log(uppercaseQuery, 'LOOK HERE')

        if (query === '') {
            return await getAllProducts();
        }

        const { rows } = await client.query(`
            SELECT * FROM products 
            WHERE 
            title LIKE '%${query}%'
            OR title LIKE '%${uppercaseQuery}%';
        `);

        console.log('products by query: ', rows)
        return rows;
    } catch (error) {
        throw error;
    }
}



module.exports = { addProduct, getAllProducts, getProductsByQuery };

