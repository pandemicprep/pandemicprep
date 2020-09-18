module.exports = {
    ...require('./seed'),
    ...require('./singletables/cart'),
    ...require('./singletables/categories'),
    ...require('./singletables/products'),
    ...require('./singletables/reviews'),
    ...require('./singletables/users'),
    ...require('./jointables/products_carts'),
    ...require('./jointables/products_categories')
}