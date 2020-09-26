/** @format */

import React, { useState } from 'react';

import { addUser, getAllUsers, getProductsByQuery, loginUser } from '../../../../api';

import { states, countries, registrationHandler, loginHandler, guestHandler } from './profileUtils';

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

	const [creditCard, setCreditCard] = useState(
		Math.floor(Math.random() * (9999999999999999 - 1000000000000000 + 1)) + 1000000000000000,
	);
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

	const cancelHandler = (event) => {
		event.preventDefault();
		resetForm();
	};

	const passwordButtonHandler = (event) => {
		console.log('password handler ', event.target);
		setView('');
	};

	const formHandler = async (event) => {
		event.preventDefault();
		console.log('the view ', view);

		try {
			//Registration
			if (view === 'register') {
				registrationHandler({ firstName, lastName, email, password1, password2 });
			}
			if (view === 'login') {
				loginHandler({ email, password1 });
			}
			if (view === 'guest') {
				console.log('getting to the guest if');
				guestHandler({
					firstName,
					lastName,
					email,
					address1,
					address2,
					city,
					state,
					zipcode,
					country,
					phone,
				});
			}
		} catch (error) {
			console.error(error);
		}

		resetForm();
	};

	function warning(warningMessage) {
		alert(warningMessage);
	}

	function resetForm() {
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

	//CURRENT VIEWS: login register guest userCheckout edit
	return (
		<div className='profile'>
			<form className='profileForm' onSubmit={formHandler}>
				<input
					type='text'
					id='firstName'
					placeholder='First Name'
					value={firstName}
					className={view === 'login' ? 'field hide' : 'field'}
					onChange={firstNameGetter}
					onKeyDown={(event) =>
						event.target.value === 'return' || event.target.value === 'enter'
							? formHandler
							: ''
					}
				/>
				<input
					type='text'
					id='lastName'
					value={lastName}
					placeholder='Last Name'
					className={view === 'login' ? 'field hide' : 'field'}
					onChange={lastNameGetter}
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
					onChange={emailGetter}
					onKeyDown={(event) =>
						event.target.value === 'return' || event.target.value === 'enter'
							? formHandler
							: ''
					}
				/>
				<button
					id='reveal'
					className={
						view === 'register' ||
						view === 'userCheckout' ||
						view === 'login' ||
						view === 'guest' ||
						view === ''
							? 'field hide'
							: 'field'
					}
					onClick={passwordButtonHandler}
				>
					Change Password
				</button>
				<input
					type='password'
					id='password1'
					value={password1}
					placeholder='Password'
					className={
						view === 'guest' || view === 'userCheckout' || view === 'edit'
							? 'field hide'
							: 'field'
					}
					onChange={password1Getter}
					onKeyDown={(event) =>
						event.target.value === 'return' || event.target.value === 'enter'
							? formHandler
							: ''
					}
				/>
				<input
					type='password'
					id='password2'
					value={password2}
					placeholder='Verify Password' //
					className={
						view === 'guest' ||
						view === 'userCheckout' ||
						view === 'login' ||
						view === 'edit'
							? 'field hide'
							: 'field'
					}
					onChange={password2Getter}
					onKeyDown={(event) =>
						event.target.value === 'return' || event.target.value === 'enter'
							? formHandler
							: ''
					}
				/>
				<input
					type='text'
					id='addressOne'
					value={address1}
					placeholder='Address Line One'
					className={
						view === 'register' ||
						view === 'login' ||
						view === 'userCheckout' ||
						view === 'edit'
							? 'field hide'
							: 'field'
					}
					onChange={address1Getter}
					onKeyDown={(event) =>
						event.target.value === 'return' || event.target.value === 'enter'
							? formHandler
							: ''
					}
				/>
				<input
					type='text'
					id='addressTwo'
					value={address2}
					placeholder='Address Line Two'
					className={
						view === 'register' ||
						view === 'login' ||
						view === 'userCheckout' ||
						view === 'edit'
							? 'field hide'
							: 'field'
					}
					onChange={address2Getter}
					onKeyDown={(event) =>
						event.target.value === 'return' || event.target.value === 'enter'
							? formHandler
							: ''
					}
				/>
				<input
					type='text'
					id='city'
					value={city}
					className={view === 'register' || view === 'login' ? 'field hide' : 'field'}
					placeholder='City'
					onChange={cityGetter}
					onKeyDown={(event) =>
						event.target.value === 'return' || event.target.value === 'enter'
							? formHandler
							: ''
					}
				/>
				<input
					type='text'
					id='zipCode'
					value={zipcode}
					className={view === 'register' || view === 'login' ? 'field hide' : 'field'}
					placeholder='Zip Code'
					onChange={zipGetter}
					onKeyDown={(event) =>
						event.target.value === 'return' || event.target.value === 'enter'
							? formHandler
							: ''
					}
				/>
				<select
					className={view === 'login' || view === 'register' ? 'field hide' : 'field'}
					value={state}
					onChange={stateGetter}
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
					className={view === 'register' || view === 'login' ? 'field hide' : 'field'}
					value={country}
					onChange={countryGetter}
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
					value={phone}
					placeholder='Phone Number'
					className={view === 'register' || view === 'login' ? 'field hide' : 'field'}
					onChange={phoneGetter}
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
					className={view === 'register' || view === 'login' ? 'field hide' : 'field'}
					value={creditCard}
					readOnly
				/>

				<br></br>
				<button id='submit' type='submit'>
					Submit
				</button>
				<button id='cancel' onClick={cancelHandler}>
					Cancel
				</button>
			</form>
		</div>
	);
};
