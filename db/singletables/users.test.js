const { addUser, sum } = require('./users');


let newUser = {id: 5};
addUser({email: '11@email.com', password: 'Password11'}).then(result => {
    newUser = result;
    console.log('newUser returned ', result);
})


test('Create a new user', () => {
    // let newUser = {id: 5};
    // addUser({email: '11@email.com', password: 'Password11'}).then(result => {
    //     newUser = result;
    //     console.log('newUser returned ', result);
    // })
    expect.assertions(1);
    expect(newUser).toEqual({});


}, 10000);

