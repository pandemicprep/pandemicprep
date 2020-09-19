const { addUser } = require('./');
const 

async function seed() {
	//creating a new user
	try {
		console.log('creating user one');
		const user1 = await addUser({
			firstName: 'Nicolas',
			lastName: 'Olivares',
            isAdmin: true,
            isUser: true,
			email: 'myemail@you.com',
			password: 'mypassword',
            addressLine1: '4545 street',
            addressLine2: '',
			city: 'Jax',
			state: 'Fl',
			zipcode: '32210',
			country: 'USA',
			phone: '555-555-5555',
            creditCard: 45454545454545455,
            
		});
        console.log('this is user 1 ', user1);
        
        console.log('creating user two, login in with minimum info ');
        const user2 = await addUser({
            firstName: 'Joe',
            lastName: 'Moe',
            isAdmin: null,
            isUser: null,
			email: 'myemail2@you.com',
			password: 'password',
            addressLine1: null,
            addressLine2: null,
			city: null,
			state: null,
			zipcode: null,
			country: null,
			phone: null,
            creditCard: null,
        });
        console.log('user2 with minimum data ', user2);

        console.log('creating user three, login in with minimum info and repeated email ');
        const user3 = await addUser({
            firstName: 'Joe',
            lastName: 'Moe',
            isAdmin: null,
            isUser: null,
			email: 'myemail2@you.com',
			password: 'password',
            addressLine1: null,
            addressLine2: null,
			city: null,
			state: null,
			zipcode: null,
			country: null,
			phone: null,
            creditCard: null,
        });
        console.log('user3 with minimum data ', user3);


        //not passing because null in email breaks the code (psql)
        // console.log('creating user four, missing info ');
        // const user4 = await addUser({
        //     firstName: 'Joe',
        //     lastName: 'Moe',
        //     isAdmin: null,
        //     isUser: null,
		// 	email: null,
		// 	password: 'password',
        //     addressLine1: null,
        //     addressLine2: null,
		// 	city: null,
		// 	state: null,
		// 	zipcode: null,
		// 	country: null,
		// 	phone: null,
        //     creditCard: null,
        // });
        // console.log('user4 with minimum data ', user4);

	} catch (error) {
		throw error;
	}
}

module.exports = { seed };
