const {addCart} = require('../index');

test('add new cart', async () => {
    expect.assertions(1);
    const cart = {status: 'active', total: 0, userId: 1};
    const newCart = await addCart(cart);
    console.log('new cart ', newCart);
    
    expect(newCart).toBe(
        expect.objectContaining({
            id: expect.any(Number),
            status: 'active',
            date: expect.any(String),
            time: expect.any(String),
            total: 0,
            userId: expect.any(Number)
        })
    );
});