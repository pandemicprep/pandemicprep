/** @format */

const express = require('express');
const cartRouter = express.Router();

const {
	addProductToCart,
	removeProductFromCart,
	deactivateCart,
	updateProductQuantity,
} = require('../db/singletables/cart');

const { getActiveCart } = require('../db');

//Add product to cart
<<<<<<< HEAD
cartRouter.post("/", async (req, res, next) => {
    if (req.user) {
        if (req.user.isUser) {
            try {
                const newProductCart = await addProductToCart(req.body);
                res.send(newProductCart);
            } catch (error) {
                throw error;
            }
        } else {
            next({ message: "Must be signed in to add a product to your cart" });
        }
    } else {
        next({ message: "Must be signed in to add a product to your cart" });
    }
=======
cartRouter.post('/', async (req, res, next) => {
	if (req.user) {
		if (req.user.isUser) {
			try {
				const newProductCart = await addProductToCart(req.body);
				res.send(newProductCart);
			} catch (error) {
				throw error;
			}
		} else {
			next({ message: 'Must be signed in to add a product to your cart' });
		}
	} else {
		next({ message: 'Must be signed in to add a product to your cart' });
	}
>>>>>>> merge-with-matthew
});

//Remove product from cart

<<<<<<< HEAD
cartRouter.delete("/:cartId/product/:products_cartsId", async (req, res, next) => {
    if (req.user) {
        if (req.user.isUser) {
            try {
                const newItems = await removeProductFromCart({
                    userId: req.user.id,
                    cartId: req.params.cartId,
                    products_cartsId: req.params.products_cartsId,
                });
                res.send(newItems);
            } catch (error) {
                throw error;
            }
        } else {
            next({ message: "Must be signed in to remove a product from your cart" });
        }
    } else {
        next({ message: "Must be signed in to remove a product from your cart" });
    }
=======
cartRouter.delete('/:cartId/product/:products_cartsId', async (req, res, next) => {
	if (req.user) {
		if (req.user.isUser) {
			try {
				const newItems = await removeProductFromCart({
					userId: req.user.id,
					cartId: req.params.cartId,
					products_cartsId: req.params.products_cartsId,
				});
				res.send(newItems);
			} catch (error) {
				throw error;
			}
		} else {
			next({ message: 'Must be signed in to remove a product from your cart' });
		}
	} else {
		next({ message: 'Must be signed in to remove a product from your cart' });
	}
>>>>>>> merge-with-matthew
});

//Patch products_carts quantity

cartRouter.patch('/quantity', async (req, res, next) => {
	if (req.user) {
		if (req.user.isUser) {
			try {
				const updatedCart = await updateProductQuantity(req.body);
				res.send(updatedCart);
			} catch (error) {
				throw error;
			}
		} else {
			next({ message: 'Must be signed in to change a product quantity in your cart' });
		}
	} else {
		next({ message: 'Must be signed in to change a product quantity in your cart' });
	}
});

cartRouter.patch('/status', async (req, res, next) => {
	if (req.user) {
		if (req.user.isUser) {
			try {
				const newCart = await deactivateCart(req.body);
				res.send(newCart);
			} catch (error) {
				throw error;
			}
		} else {
			next({ message: 'Must be signed in to change a cart status' });
		}
	} else {
		next({ message: 'Must be signed in to change a cart status' });
	}
});

module.exports = cartRouter;
