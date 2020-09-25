/** @format */

import React, { useState } from 'react';


import { addUser, getAllUsers, getProductsByQuery } from '../../../index';

import {
	getAllUsers
} from '../../../../api/index'


import { states, countries } from '../../../utils';

import './Profile.css';


export const Profile = () => {
	//CURRENT VIEWS: login register guest userCheckout edit 
	//CHANGE PASSWORD BUTTON: needs onclick function to switch state to ''
	//SET UP STATES FOR DIFFERENT VIEWS! :)
	const [view, setView] = useState('edit');
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



	const cancelHandler = (event) => { };

	const formHandler = async (event) => {			//will become registration handler
		event.preventDefault();

		if (password1.length > 0) {
			const passwordCheck = checkPassword(password1, password2);
			if (!passwordCheck.valid) {
				alert(passwordCheck.message);
				return;
			}
		}
		addUser({
			isUser: true,
			firstName,
			lastName,
			email,
			password: password1,
			addressLine1: address1,
			addressLine2: address2,
			city,
			state,
			zipcode,
			country,
			phone,
			creditCard,
		})
			.then((result) => {
				if (result.message) {
					alert(result.message);
				} else {
					localStorage.setItem('panprepToken', result);
					setFirstName('');
					setLastName('');
					setEmail('');
					setPassword1('');
					setPassword2('');
					setAddress1('');
					setAddress2('');
					setCity('');
					setState('Alabama');
					setZipcode('');
					setCountry('United States');
					setPhone('');

				}
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const formHandler = async (event) => {			//will become login handler
		event.preventDefault();


		loginUser({
			email,
			password: password1,
		})
			.then((result) => {
				if (result.message) {
					alert(result.message);
				} else {
					localStorage.setItem('panprepToken', result);
					setEmail('');
					setPassword1('');
				}
			})
			.catch((error) => {
				console.error(error);
			});

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
			<form className='profileForm' onSubmit={formHandler}>
				<input
					type='text'
					id='firstName'
					placeholder='First Name'
					className={view === 'login' ? "field hide" : "field"}
					onChange={firstNameGetter}
				/>
				<input
					type='text'
					id='lastName'
					placeholder='Last Name'
					className={view === 'login' ? "field hide" : "field"}
					onChange={lastNameGetter}
				/>
				<input type='text'
					id='email'
					placeholder='Email Address'
					onChange={emailGetter} />
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
					className={view === 'guest' || view === 'userCheckout' || view === 'edit' ? "field hide" : "field"}
					onChange={password1Getter}
				/>
				<input
					type='password'
					id='password2'
					placeholder='Verify Password' //
					className={view === 'guest' || view === 'userCheckout' || view === 'login' || view === 'edit' ? "field hide" : "field"}
					onChange={password2Getter}
				/>
				<input
					type='text'
					id='addressOne'
					placeholder='Address Line One'
					className={view === 'register' || view === 'login' || view === 'userCheckout' || view === 'edit' ? "field hide" : "field"}
					onChange={address1Getter}
				/>
				<input
					type='text'
					id='addressTwo'
					placeholder='Address Line Two'
					className={view === 'register' || view === 'login' || view === 'userCheckout' || view === 'edit' ? "field hide" : "field"}
					onChange={address2Getter}
				/>
				<input type='text' id='city' className={view === 'register' || view === 'login' ? "field hide" : "field"} placeholder='City' onChange={cityGetter} />
				<input type='text' id='zipCode' className={view === 'register' || view === 'login' ? "field hide" : "field"} placeholder='Zip Code' onChange={zipGetter} />
				<select className={view === 'login' || view === 'register' ? "field hide" : "field"} onChange={stateGetter}>
					{states.map((state, i) => {
						return (
							<option key={i} value=''>
								{state}
							</option>
						);
					})}
				</select>
				<select className={view === 'register' || view === 'login' ? "field hide" : "field"} onChange={countryGetter}>
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
					className={view === 'register' || view === 'login' ? "field hide" : "field"}
					onChange={phoneGetter}
				/>
				<input
					type='number'
					id='creditCard'
					placeholder='Credit Card Number'
					className={view === 'register' || view === 'login' ? "field hide" : "field"}
					value={creditCard}
					readOnly
				/>
				<button className={view === 'guest' || view === 'userCheckout' || view === 'login' || view === 'guest' || view === '' ? "field hide" : "field"}>
					Change Password</button><br></br>
				<button id='submit' type='submit'>
					Submit
				</button>
				<button id='cancel' onChange={cancelHandler}>
					Cancel
				</button>


			</form>
		</div>
	);
};
