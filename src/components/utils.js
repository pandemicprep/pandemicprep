export async function addProductToGuestCart(cartState, product) {
	const cart = { ...cartState };
	console.log('cart and product from utils ', cart, product);
	const alreadyPresent = cart.items.find((item) => {
		return item.id === product.id;
	});
	if (alreadyPresent) {
		cart.items.map((item) => {
			if (item.productId === product.id) {
				item.quantity = item.quantity + 1;
				item.total = item.quantity * parseFloat(item.unitPrice);
			}
		});
	} else {
		cart.items.push({
			productId: product.id,
			quantity: 1,
			unitPrice: parseFloat(product.price),
			itemTotal: parseFloat(product.price),
			price: parseFloat(product.price),
			...product,
		});
	}

	let cartQuantity = 0;
	let cartTotal = 0;
	cart.items.map((item) => {
		cartQuantity = cartQuantity + item.quantity;
		cartTotal = cartTotal + parseFloat(item.itemTotal);
		console.log('cartTotal, itemTotal ', cartTotal);
	});
	cart.cartQuantity = cartQuantity;
	cart.total = cartTotal;

	localStorage.setItem('panprepCart', JSON.stringify(cart));
	return cart;
}
