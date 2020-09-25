const { client } = require('../client');
const Promise = require('bluebird');

const { addCategory, categoryIdByName, getCategoryByName } = require('./categories');
const { addProduct_Categories } = require('../jointables/products_categories')

/**
 * addProduct => add product,
 * then add category,
 * then add products_categories
 * For adding category: first try to get category by name.
 *  If you get it, use that id, don’t add. If you don’t get anything, then add
 * For the products_categories you’ll use the id of the product and the id of the category
 */


 async function addProductAndCategory({name, price, description, image, category}) {
	const categories = category.split(' ');
	const length = categories.length;

	try {
		const newProduct = await addProduct({name, price, description, image});
		
		await Promise.mapSeries(categories, async function(category, index, length) {
			const categoryId = await categoryIdByName(category);
			const jointTable = await addProduct_Categories(newProduct.id, categoryId);
			return jointTable;
		})
		// await Promise.all(categories.map(async (categoryName) => {
		// 	console.log('getting inside map');
		// 	try {
		// 		const categoryId = await categoryIdByName(categoryName);
		// 		const jointTable = await addProduct_Categories(newProduct.id, categoryId);
		// 		return jointTable;
		// 	} catch (error) {
		// 		throw error;
		// 	}
		// }));
		return newProduct;

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

// async function addProductAndCategory({name, price, description, image, category}) {
//     try {
//         const newProduct = await addProduct({name, price, description, image});
//         // console.log('inside addProductAndCategory new product ID: ', newProduct.id);

//         const categories = category.split(' ');
//         // console.log('inside addProductAndCategory categories: ', categories);
//         if (categories.length === 1) {
//             const newCategory = await addCategory(category);
//             await addProduct_Categories(newProduct.id, newCategory.id);
//         } else if (categories.length > 1) {
//             await Promise.all(
//                 categories.map(async (name) => {
//                     const categoryByName = await addCategory(name);
//                     console.log('LOOK HERE PRODUCT ID ', newProduct)
//                     console.log('LOOK HERE CATEGORY ID ', categoryByName)
//                     await addProduct_Categories(newProduct.id, categoryByName.id);
//                 })
//             )
//         }

        
//     } catch (error) {
//         throw error;
//     }
// }


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
		// console.log('entering products query in db...');
		// console.log('query: ', query);

		const uppercaseQuery = query.charAt(0).toUpperCase() + query.slice(1);
		// console.log(uppercaseQuery, 'LOOK HERE');

		if (query === '') {
			return await getAllProducts();
		}

		const { rows } = await client.query(`
            SELECT * FROM products 
            WHERE 
            title LIKE '%${query}%'
            OR title LIKE '%${uppercaseQuery}%';
        `);

		// console.log('products by query: ', rows);
		return rows;
	} catch (error) {
		throw error;
	}
}

module.exports = { 
    addProductAndCategory, 
    getAllProducts, 
    getProductsByQuery,
    addProduct
};
