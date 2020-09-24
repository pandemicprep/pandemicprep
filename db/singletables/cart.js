const { client } = require('../client');

async function addCart({
    status,
    lastUpdated,
    total,
    userId
}) {
    try {
        
    
    const {
        rows: [newCart]
     } = await client.query(`
        INSERT INTO carts (status, "lastUpdated", total, "userId")
        VALUES ($1, $2, $3, $4)
        RETURNING *;
    `, [status, lastUpdated, total, userId]);

    console.log('newCart in cart.js: ', newCart);
    return newCart;
    } catch (error) {
    
    }
}



module.exports = {
    addCart,

}