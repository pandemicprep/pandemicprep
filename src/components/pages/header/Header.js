/** @format */

import React, { useState } from 'react';

import './Header.css';

import { getProductsByQuery } from '../../../api/products';

import { Login, Register } from '../../index';

export const Header = ({
	products,
	setProducts,
	// searchObject,
	// setSearchObject,
	useHistory,
	NavLink,
	promotedProducts,
	setPageType,
	setView,
	setSearchTerm,
	user,
	setUser,
	cartSize,
	setCart,
	setCartSize,
	setCategory,
	setProfileCompleted
}) => {
	const history = useHistory();
	const [searchString, setSearchString] = useState('');

	const handleSearchString = (event) => {
		setSearchString(event.target.value);
	};

	const searchProducts = (event) => {
		event.preventDefault();

		if (searchString.length > 0) {
			setPageType('search');
			setCategory('search');
			setSearchTerm(searchString);

			setSearchString('');
		} else {
			alert('Must enter search term(s)');
		}
		history.push('/productsview');
	};

	return (
		<div>
			<div id='headerWrap' className='StreamsHero-image'>
				<h1 id='prepared'>
					Are you prepared for
					<span id='doomsday'>DOOMSDAY?</span>
				</h1>
				<NavLink to='/news'>
					<button id='updatedButton' onClick={() => setCategory('')}>
						Stay Updated
					</button>
				</NavLink>
			</div>
			<div className='headerContainer'>
				<NavLink
					to='/'
					onClick={() => {
						setProducts(promotedProducts);
						setCategory('');
					}}
				>
					<img
						id='headLogo'
						src={process.env.PUBLIC_URL + '/styleimages/PANPREPLOGO.png'}
					/>
				</NavLink>

				<form onSubmit={searchProducts} className='searchForm'>
					<input
						value={searchString}
						onChange={handleSearchString}
						type='text'
						className='searchTerm'
						placeholder='What are you looking for?'
						contentEditable='true'
					/>

					<button type='submit' id='search' className='searchButton'>
						<img id='sbtn' src={process.env.PUBLIC_URL + '/styleimages/search.png'} />
					</button>
				</form>

				{user.isUser === true ? (
					''
				) : (
					<>
						<button
							className='button'
							id='login'
							onClick={() => {
								setView('login');
								setCategory('');
								history.push('/login');
							}}
						>
							Login
						</button>

						<h3 id='breaker'>|</h3>
						<button
							className='button'
							id='signup'
							onClick={() => {
								setView('register');
								setCategory('');
								history.push('/register');
							}}
						>
							Sign Up
						</button>
					</>
				)}

				<h3 id='breaker'>|</h3>
				<button
					className='button'
					id='cart'
					onClick={() => {
						setCategory('');
						history.push('/cart');
					}}
				>
					<section id='cart-size'>{cartSize > 0 ? cartSize : ''}</section>
					<img id='cartLogo' src={process.env.PUBLIC_URL + '/styleimages/cart.png'} />
				</button>

				{user.isUser === false ? (
					''
				) : (
					<div className='dropdown'>
						<button className='dropbtn'>
							Welcome {user.firstName}!
							<img
								id='pointer'
								src={process.env.PUBLIC_URL + '/styleimages/pointer.png'}
							/>
						</button>
						<div className='dropdown-content'>
							{user.isAdmin ? (
								<a href='#' onClick={() => history.push('/admin')}>
									<img
										id='dropdownIcon'
										src={process.env.PUBLIC_URL + '/styleimages/admin.png'}
									/>
									Admin
								</a>
							) : (
								''
							)}
							<a
								href='#'
								onClick={() => {
									setView('edit');
									history.push('/edit-user');
								}}
							>
								<img
									id='dropdownIcon'
									src={process.env.PUBLIC_URL + '/styleimages/settings.png'}
								/>
								Edit Profile
							</a>
							<a href='#' onClick={() => history.push('/orders')}>
								<img
									id='dropdownIcon'
									src={process.env.PUBLIC_URL + '/styleimages/shop.png'}
								/>
								Orders
							</a>
							<a
								href='#'
								onClick={() => {
									localStorage.removeItem('panprepToken');
									setUser({
										firstName: 'Guest',
										isAdmin: false,
										isUser: false,
										token: '',
									});
									setCart({
										status: 'active',
										cartQuantity: 0,
										total: 0,
										items: [],
									});
									setCartSize(0);
									setProfileCompleted(false);
								}}
							>
								<img
									id='dropdownIcon'
									src={process.env.PUBLIC_URL + '/styleimages/logout.png'}
								/>
								Log Out
							</a>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};
