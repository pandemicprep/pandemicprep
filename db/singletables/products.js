
const { client } = require('../client');
const Promise = require('bluebird');
const LIMIT = 24;

const {
  addCategory,
  categoryIdByName,
  getCategoryByName,
} = require("./categories");
const productArray = require('./productObject');


/**
 * addProduct => add product,
 * then add category,
 * then add products_categories
 * For adding category: first try to get category by name.
 *  If you get it, use that id, don’t add. If you don’t get anything, then add
 * For the products_categories you’ll use the id of the product and the id of the category
 */



 async function addProductAndCategory({name, price, description, image, category, isHighlighted}) {
	const categories = category.split(' ');
	const length = categories.length;

	try {
		const newProduct = await addProduct({name, price, description, image, isHighlighted});
		
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
    newProduct.price = parseFloat(newProduct.price);
		return newProduct;

	} catch (error) {
		throw error;
	}
 }




async function addProduct({ name, price, description, image, isHighlighted }) {
  try {
    const {
      rows: [newProduct],
    } = await client.query(
      `
		INSERT INTO products (title, price, description, image, "isHighlighted")
		VALUES ($1, $2, $3, $4, $5)
		ON CONFLICT DO NOTHING
		RETURNING *;
	`,

			[name, price, description, image, isHighlighted],
		);
		if (newProduct) {
      newProduct.price = parseFloat(newProduct.price);
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
async function getAllProducts(pageNumber = 1) {
  try {
    const OFFSET = (LIMIT * (pageNumber-1)) + 1;

    const { rowCount } = await client.query( `
      SELECT * FROM products;
    `)

    const { rows } = await client.query(`
            SELECT * FROM products
            LIMIT ${LIMIT} OFFSET ${OFFSET};
        `);

    const pageCount = Math.ceil(rowCount / LIMIT);  

    rows.forEach((item) => {
      item.price = parseFloat(item.price);
    })

    return [pageCount, rows];
  } catch (error) {
    throw error;
  }
}

// gets specific products by a search query
async function getProductsByQuery(query, pageNumber) {
  try {
    const OFFSET = (LIMIT * (pageNumber-1));
    // console.log('entering products query in db...');
    // console.log('query: ', query);

    // const uppercaseQuery = query.charAt(0).toUpperCase() + query.slice(1);
    // console.log(uppercaseQuery, 'LOOK HERE');

    if (query === "") {
      return await getAllProducts();
    }

    const { rowCount } = await client.query(`
      SELECT id FROM products 
      WHERE 
      title ILIKE '%${query}%'
      OR description ILIKE '%${query}%';
    `)

    
    const { rows } = await client.query(`
            SELECT id FROM products 
            WHERE 
            title ILIKE '%${query}%'
            OR description ILIKE '%${query}%'
            LIMIT ${LIMIT} OFFSET ${OFFSET};
        `);
        console.log('this is how many are being queried ', rows);

      const prodIdArray = rows.map((product) => {           //array of ids [ 1, 2, 3, etc ]
        const [newProductId] = Object.values(product);
        return newProductId;
      });
  
      const productsArray = await Promise.map(prodIdArray, async function(productId) {
        return await getProductById(productId)
      }, { concurrency: 25});   

      productArray.forEach((product) => {
          product.price = parseFloat(product.price);
      })


    const pageCount = Math.ceil(rowCount / LIMIT);  
    // console.log('LOOK HERE', pageCount, productsArray)
    return [pageCount, productsArray];
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

async function getProductsByCategory(category, pageNumber) {
  console.log(pageNumber, 'pageNumber in db')

  try {
      const OFFSET = (LIMIT * (pageNumber -1)) + 1;

    const { rowCount } = await client.query(`
      SELECT products.id
      FROM products 
      JOIN products_categories ON products.id = products_categories."productId"
      JOIN categories ON categories.id = products_categories."categoryId"
      WHERE categories.name = $1;
    `, [category])

      const {
          rows: productIds
      } = await client.query(`
          SELECT products.id
          FROM products 
          JOIN products_categories ON products.id = products_categories."productId"
          JOIN categories ON categories.id = products_categories."categoryId"
          WHERE categories.name = $1
          LIMIT ${LIMIT} OFFSET ${OFFSET};
      `, [category]);

      console.log(productIds, 'counting product ids')

      const prodIdArray = productIds.map((product) => {
          const [newProductId] = Object.values(product);
          return newProductId;
      });

      const productsArray = await Promise.map(prodIdArray, async function(productId) {
          return await getProductById(productId)
      }, { concurrency: 25});

      const pageCount = Math.ceil(rowCount / LIMIT);  


      return [pageCount, productsArray];

      // console.log('productsArray in getProductByCategory', productsArray);
  } catch (error) {
      throw error;
  }
}

async function getHighlightedProducts() {
  try {
    const {
      rows
    } = await client.query(`
     SELECT id FROM products 
     WHERE "isHighlighted" = true;
    `);

    const prodIdArray = rows.map((product) => {
      const [newProductId] = Object.values(product);
      return newProductId;
    });

    const productsArray = await Promise.map(prodIdArray, async function(productId) {
      return await getProductById(productId)
    }, { concurrency: 25});

    return productsArray;
  } catch (error) {
    throw error;
  }
}

async function updateProduct(id, fields = {}) {
  console.log(id, fields, 'getting to updateProduct in db')
  const setString = Object.keys(fields)
        .map((key, index) => `"${key}"=$${index + 1}`)
        .join(", ");

  if (setString.length === 0) {
    return;
  }
  try {
    const {
      rows: [product]
    } = await client.query(`
      UPDATE products 
      SET ${setString}
      WHERE id=${id}
      RETURNING *;
    `, Object.values(fields));

    return product;
  } catch (error) {
    throw error
  }
}


//Joint products_categories

async function addProduct_Categories(prodId, catId) {
  try {
      if (prodId > 0 && catId > 0) {
          const {
              rows: [product_categoriesItem],
          } = await client.query(
              `
                  INSERT INTO products_categories ("productId", "categoryId")
                  VALUES ($1, $2);
                  `,
              [prodId, catId]
          );
          if (product_categoriesItem) {
              return product_categoriesItem;
          } else {
              return false;
          }
      } else {
          return false;
      }
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
  getProductsByCategory,
  getHighlightedProducts,
  updateProduct,
  addProduct_Categories
};
