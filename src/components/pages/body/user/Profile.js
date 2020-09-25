/** @format */

import React, { useState } from 'react';


import { addUser, getAllUsers, getProductsByQuery } from '../../../index';

// import {
// 	getAllUsers
// } from '../../../../api/index'


import { states, countries } from '../../../utils';

import './Profile.css';

export const Profile = () => {

	const [view, setView] = useState('register'); //will define the page view. Views are register, guest, userPay, edit

	const [isUser, setIsUser] = useState(false);
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password1, setPassword1] = useState('');
	const [password2, setPassword2] = useState('');
	const [address1, setAddress1] = useState('');
	const [address2, setAddress2] = useState('');
	const [city, setCity] = useState('');
	const [state, setState] = useState('');
	const [zipcode, setZipcode] = useState('');
	const [country, setCountry] = useState('');
	const [phone, setPhone] = useState('');

	const [creditCard, setCreditCard] = useState(Math.floor(Math.random() * (9999999999999999 - 1000000000000000 + 1)) +
		1000000000000000);
  const [searchString, setSearchString] = useState('');

	const firstNameGetter = (event) => {
		setFirstName(event.target.value);
	};
	const lastNameGetter = (event) => {
		setLastName(event.target.value);
	};
	const emailGetter = (event) => {
		setEmail(event.target.value);
	};
	const password1Getter = (event) => {
		setPassword1(event.target.value);
	};
	const password2Getter = (event) => {
		setPassword2(event.target.value);
	};
	const address1Getter = (event) => {
		setAddress1(event.target.value);
	};
	const address2Getter = (event) => {
		setAddress2(event.target.value);
	};
	const cityGetter = (event) => {
		setCity(event.target.value);
	};
	const zipGetter = (event) => {
		setZipcode(event.target.value);
	};
	const stateGetter = (event) => {
		setState(event.target.value);
	};
	const countryGetter = (event) => {
		setCountry(event.target.value);
	};
	const phoneGetter = (event) => {
		setPhone(event.target.value);
	};

		
	
	const cancelHandler = (event) => {};

	// const formHandler = async (event) => {			//will become registration handler
	// 	event.preventDefault();

	// 	if (password1.length > 0) {
	// 		const passwordCheck = checkPassword(password1, password2);
	// 		if (!passwordCheck.valid) {
	// 			alert(passwordCheck.message);
	// 			return;
	// 		}
	// 	}
	// 	addUser({
	// 		isUser: true,
	// 		firstName,
	// 		lastName,
	// 		email,
	// 		password: password1,
	// 		addressLine1: address1,
	// 		addressLine2: address2,
	// 		city,
	// 		state,
	// 		zipcode,
	// 		country,
	// 		phone,
	// 		creditCard,
	// 	})
	// 		.then((result) => {
	// 			if (result.message) {
	// 				alert(result.message);
	// 			} else {
	// 				localStorage.setItem('panprepToken', result);
	// 				setFirstName('');
	// 				setLastName('');
	// 				setEmail('');
	// 				setPassword1('');
	// 				setPassword2('');
	// 				setAddress1('');
	// 				setAddress2('');
	// 				setCity('');
	// 				setState('Alabama');
	// 				setZipcode('');
	// 				setCountry('United States');
	// 				setPhone('');

	// 			}
	// 		})
	// 		.catch((error) => {
	// 			console.error(error);
	// 		});
	// };

// 	const formHandler = async (event) => {			//will become login handler
// 		event.preventDefault();

		
		// loginUser({
		// 	email,
		// 	password: password1,
		// })
		// 	.then((result) => {
		// 		if (result.message) {
		// 			alert(result.message);
		// 		} else {
		// 			localStorage.setItem('panprepToken', result);
		// 			setEmail('');
		// 			setPassword1('');
		// 		}
		// 	})
		// 	.catch((error) => {
		// 		console.error(error);
		// 	});

	};

	function warning(warningMessage) {
		alert(warningMessage);
	}

	// added by matthew just to test getAllUsers
	const logAllUsers = async () => {
		const allUsers = await getAllUsers();
		console.log('allUsers logged in front end: ', allUsers);
		const products = await getProductsByQuery('memo');
		console.log('PLEASE WORRRRKRKRKRK', products);
	};

	const handleSearchString = (event) => {
		setSearchString(event.target.value);
	};

	return (
		<div className='profile'>
			<p>Profile</p>
			<form className='profileForm' onSubmit={formHandler}>
				<input
					type='text'
					id='firstName'
					placeholder='First Name'
					value={firstName}
					onChange={(event) => setFirstName(event.target.value)}
					onKeyDown={(event) =>
						event.target.value === 'return' || event.target.value === 'enter'
							? formHandler
							: ''
					}
				/>
				<input
					type='text'
					id='lastName'
					placeholder='Last Name'
					value={lastName}
					onChange={(event) => setLastName(event.target.value)}
					onKeyDown={(event) =>
						event.target.value === 'return' || event.target.value === 'enter'
							? formHandler
							: ''
					}
				/>
				<input
					type='text'
					id='email'
					placeholder='Email Address'
					value={email}
					onChange={(event) => setEmail(event.target.value)}
					onKeyDown={(event) =>
						event.target.value === 'return' || event.target.value === 'enter'
							? formHandler
							: ''
					}
				/>
				<input
					type='password'
					id='password1'
					placeholder='Password'
					value={password1}
					onChange={(event) => setPassword1(event.target.value)}
					onKeyDown={(event) =>
						event.target.value === 'return' || event.target.value === 'enter'
							? formHandler
							: ''
					}
				/>
				<input
					type='password'
					id='password2'
					placeholder='Password'
					value={password2}
					onChange={(event) => setPassword2(event.target.value)}
					onKeyDown={(event) =>
						event.target.value === 'return' || event.target.value === 'enter'
							? formHandler
							: ''
					}
				/>
				<input
					type='text'
					id='addressOne'
					placeholder='Address'
					value={address1}
					onChange={(event) => setAddress1(event.target.value)}
					onKeyDown={(event) =>
						event.target.value === 'return' || event.target.value === 'enter'
							? formHandler
							: ''
					}
				/>
				<input
					type='text'
					id='addressTwo'
					placeholder='Address'
					value={address2}
					onChange={(event) => setAddress2(event.target.value)}
					onKeyDown={(event) =>
						event.target.value === 'return' || event.target.value === 'enter'
							? formHandler
							: ''
					}
				/>
				<input
					type='text'
					id='city'
					placeholder='City'
					value={city}
					onChange={(event) => setCity(event.target.value)}
					onKeyDown={(event) =>
						event.target.value === 'return' || event.target.value === 'enter'
							? formHandler
							: ''
					}
				/>
				<input
					type='text'
					id='zipCode'
					placeholder='Zip Code'
					value={zipcode}
					onChange={(event) => setZipcode(event.target.value)}
					onKeyDown={(event) =>
						event.target.value === 'return' || event.target.value === 'enter'
							? formHandler
							: ''
					}
				/>
				<select
					className='stateDropdown'
					value={state}
					onChange={(event) => setState(event.target.value)}
				>
					{states.map((state, i) => {
						return (
							<option key={i} value=''>
								{state}
							</option>
						);
					})}
				</select>
				<select
					className='countryDropdown'
					value={country}
					onChange={(event) => setCountry(event.target.value)}
				>
					{countries.map((country, i) => {
						return (
							<option key={i} value=''>
								{country}
							</option>
						);
					})}
				</select>
				<input
					type='text'
					id='phoneNumber'
					placeholder='Phone Number'
					value={phone}
					onChange={(event) => setPhone(event.target.value)}
					onKeyDown={(event) =>
						event.target.value === 'return' || event.target.value === 'enter'
							? formHandler
							: ''
					}
				/>
				<input
					type='number'
					id='creditCard'
					placeholder='Credit Card Number'
					value={creditCard}
					readOnly
				/>
				<button id='submit' type='submit'>
					Submit
				</button>
				<button id='cancel' onChange={cancelHandler}>
					Cancel
				</button>


			</form>
			<button onClick={logAllUsers}>
				User test
			</button>

		</div>
	);
};

// Maybe add cvv and date for the credit card. Front end only.

//Helper functions
function checkPassword(password1, password2) {
	if (password1 === password2) {
		var password = password1;
	} else {
		return { valid: false, message: 'Passwords must match' };
	}
	if (password.length < 8) {
		return { valid: false, message: 'This password is too short. 8 characters or more' };
	}
	const passwordCharacters = password.split('');
	let hasNumber = false;
	let hasUpper = false;
	passwordCharacters.forEach((char) => {
		if (char >= 0 && char <= 10) {
			hasNumber = true;
		}
		if (char >= 'A' && char <= 'Z') {
			hasUpper = true;
		}
	});
	if (hasNumber) {
		return { valid: true, message: 'valid' };
	} else {
		return { valid: false, message: 'Password must have at least one number' };
	}
	if (hasUpper) {
		return { valid: true, message: 'valid' };
	} else {
		return { valid: false, message: 'Password must have at least one uppercase letter' };
	}
}
