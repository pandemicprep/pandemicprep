const { client } = require('../client');

const { addCategory, categoryIdByName } = require('./categories');
const { addProduct_Categories } = require('../jointables/products_categories')

/**
 * addProduct => add product,
 * then add category,
 * then add products_categories
 * For adding category: first try to get category by name.
 *  If you get it, use that id, don’t add. If you don’t get anything, then add
 * For the products_categories you’ll use the id of the product and the id of the category
 */

async function addProductAndCategory({ name, price, description, image, category }) {
	try {
		const categories = category.split(' ');
		console.log('category split ', categories);
		// add the product

		const newProduct = await addProduct({ name, price, description, image });
		if (newProduct) {
			var newProductId = newProduct.id;
		} else {
			//product already existed in the db
			// console.log('finishing after creating product ', newProduct);
			return;
		}
		console.log('new product from add product ', newProduct);
		await Promise.all(
			categories.map((name) => {
				var catId;
				categoryIdByName(name).then((categoryId) => {
					if (!categoryId) {
						addCategory(name).then((categoryObject) => {
							catId = categoryObject.id;
						});
					} else {
						catId = categoryId;
					}
				}); //number or false
				// console.log('first categoryId, finding by name: ', categoryId);
				// if (!categoryId) {
				// 	const categoryObject = await addCategory(name); // category object or false
				// 	console.log('first categoryId should be false. categoryObject should be new category ', categoryObject);
				// 	if (categoryObject) {

				// 		categoryId = categoryObject.id;
				// 		console.log('categoryId will now turn into id of categoryObject ', categoryId);
				// 	}
				// }

				if (catId) {
					
						addProduct_Categories(newProduct, catId);
				}
			}),
		);
	} catch (error) {
		throw error;
	}
}

async function addProduct({ name, price, description, image }) {
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
			[name, price, description, image],
		);
		if (newProduct) {
			return newProduct;
		} else {
			return false;
		}
	} catch (error) {
		throw error;
	}
}


// gets all products
async function getAllProducts() {
	try {
		const { rows } = await client.query(`
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
		console.log('entering products query in db...');
		console.log('query: ', query);

		const uppercaseQuery = query.charAt(0).toUpperCase() + query.slice(1);
		console.log(uppercaseQuery, 'LOOK HERE');

		if (query === '') {
			return await getAllProducts();
		}

		const { rows } = await client.query(`
            SELECT * FROM products 
            WHERE 
            title LIKE '%${query}%'
            OR title LIKE '%${uppercaseQuery}%';
        `);

		console.log('products by query: ', rows);
		return rows;
	} catch (error) {
		throw error;
	}
}

module.exports = { addProductAndCategory, getAllProducts, getProductsByQuery };
