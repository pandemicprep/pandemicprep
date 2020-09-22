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
        const categories = category.split(' ');

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


       await Promise.all(categories.map(async category => {
                try {
            st { 
                          rows: [newCategory] }
                    wait client.query(`
                 INTO categories (name)
                VALUES ($1)
                ON CONFLICT DO NOTHING
                RETURNING id;
            `, [category]);

            if (!newCategory) {
                        const {
                        rows: [index]
                        await client.query(`
                    SELECT id FROM categories
                    WHERE name=$1;
                `, [category]);
            }
                    
 newCategory ? newCategory : index;
                                
roduct.id, newIndex, 'LOOK HERE')
                                
 await client.query(`
                                    INSERT INTO products_categories ("productId", "categoryId")
                VALUES ($1, $2);
            `, [newProduct.id, newIndex]);

            } catch (error) {
            throw error;
                    



       

        // console.log('new category: ', newCategory);
                        

            if (newCategory) {
    //     const { rows } = await client.query(`
                                        //         INSER INTO products_categories ("productId", "categoryId");
                    //     `, [newProduct.id, newCategory.id]);
                        

                
 }
                                    
og('newProductCategory: ', rows)
                                

        if (newProduct) {
                            return newProduct;
                            se {
                        return { message: 'Unable to add new Product' };
                                

} catch (error) {
                                            throw error;
                                


// gets all products
                                                    async function getAllProducts() {
                                try {
                                    const {
                                        rows
                                        await client.query(`
                                    SELECT * FROM products;
        `);

        return rows;
                                                    } catch (error) {
                                throw error;
                                    
                                
                            

specific products by a search query
                            async function getProductsByQuery(query) {
                                try {
                                                const uppercaseQuery = query.charAt(0).toUpperCase() + query.slice(1);
                                    
= '') {
                                                    return await getAllProducts();
                                        
                                    
rows } = await client.query(`
                                        SELECT * FROM products 
            WHERE 
            title LIKE '%${query}%'
            OR title LIKE '%${uppercaseQuery}%';
        `);

        return rows;
                                        } catch (error) {
                                w error;
                                    
                                
                               



module.exports = { addProduct, getAllProducts, getProductsByQuery };                            