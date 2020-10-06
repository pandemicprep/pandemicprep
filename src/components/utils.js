
export async function addProductToGuestCart(product) {
    try {
        if (localStorage.getItem('panprepCart')) {
            const cart = JSON.parse(localStorage.getItem('panprepCart'));
            const alreadyPresent = cart.items.find((item => {
                return item.id === product.id;
            }));
            if (alreadyPresent) {
                cart.quantity = cart.quantity + 1;
            }

        }
    } catch (error) {
        console.error(error);
    }
}