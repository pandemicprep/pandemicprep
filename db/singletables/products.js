
const { client } = require('../client');
const Promise = require('bluebird');

const {
  addCategory,
  categoryIdByName,
  getCategoryByName,
} = require("./categories");
const { addProduct_Categories } = require("../jointables/products_categories");

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

    if (query === "") {
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

async function getProductsForCartHistory() {
  try {
    const { rows } = await client.query(`
		SELECT title, description, image, "imageDescription"
		FROM products;`);
    return rows;
  } catch (error) {
    throw error;
  }
}

async function getProductById(id) {
  try {
    const {
      rows: [product]
    } = await client.query(`
      SELECT * FROM products
      WHERE id=$1;
    `, [id]);

  //  console.log('product in getProductById', product)

    const {
      rows: categories
    } = await client.query(`
      SELECT categories.name FROM categories 
      JOIN products_categories ON categories.id = products_categories."categoryId"
      JOIN products ON products.id = products_categories."productId"
      WHERE products.id=$1;
    `, [product.id]);
    // console.log('categories line 178', categories)

    const newCategories = categories.map((category) => {
        const [singleCat] = Object.values(category);
        return singleCat;
    });

    product.categories = newCategories;

    const {
      rows: reviews
    } = await client.query(`
    SELECT * FROM reviews 
    WHERE "productId" = $1;
  `, [product.id]);

    product.reviews = reviews;

    // console.log('whole product inside getProductById in product db', product);
    
    return product;
  } catch (error) {
    throw error;
  }
}

async function getProductsByCategory(category) {
  try {
      const {
          rows: productIds
      } = await client.query(`
          SELECT products.id
          FROM products
          JOIN products_categories ON products.id = products_categories."productId"
          JOIN categories ON categories.id = products_categories."categoryId"
          WHERE categories.name = $1;
      `, [category]);


      const prodIdArray = productIds.map((product) => {
          const [newProductId] = Object.values(product);
          return newProductId;
      });

      const productsArray = await Promise.map(prodIdArray, async function(productId) {
          return await getProductById(productId)
      }, { concurrency: 25});

      return productsArray;

      // console.log('productsArray in getProductByCategory', productsArray);
  } catch (error) {
      throw error;
  }
}

module.exports = {
  getProductById,
  addProductAndCategory,
  getAllProducts,
  getProductsByQuery,
  addProduct,
  getProductsForCartHistory,
  getProductsByCategory
};
