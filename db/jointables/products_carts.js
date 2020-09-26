const { client } = require("../client");

// const { getCartHistoryStatus } = require("../singletables/cart");

// const { getProductsForCartHistory } = require("../singletables/products");

async function createProductCart({ productId, cartId, quantity, unitPrice }) {
  try {
    const itemTotal = quantity * unitPrice;
    const {
      rows: [prodCart],
    } = await client.query(
      `
              INSERT INTO products_carts ("productId", "cartId", quantity, "unitPrice", "itemTotal")
              VALUES ($1, $2, $3, $4, $5)
              RETURNING *;
          `,
      [productId, cartId, quantity, unitPrice, itemTotal]
    );
    return prodCart;
  } catch (error) {
    throw error;
  }
}

async function getAllProductsCart() {
  try {
    const { rows } = await client.query(`
            SELECT * FROM products_carts
            `);
    return rows;
  } catch (error) {
    throw error;
  }
}
module.exports = {
  createProductCart,
  getAllProductsCart,
};
