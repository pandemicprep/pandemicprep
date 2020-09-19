const { client } = require('../client');


async function addProduct({
    name,
    price,
    description,
    imageURL

}) {
    console.log('getting to addUser at the back end ');
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



module.exports = { addProduct };

