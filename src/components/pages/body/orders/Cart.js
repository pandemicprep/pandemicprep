/** @format */

import React, { useState } from 'react';

import './Cart.css';

import { addNewCart } from '../../../../api';
import { Product } from '../products/Product';

export const Cart = ({ cart, setCart, user }) => {
	const [status, setStatus] = useState('');
	const [lastUpdated, setLastUpdated] = useState('');
	const [total, setTotal] = useState('');
	const [userId, setUserId] = useState('');

	const product = cart.items[0];

	const handleStatus = (event) => {
		setStatus(event.target.value);
	};

	const handleLastUpdated = (event) => {
		setLastUpdated(event.target.value);
	};

	const handleTotal = (event) => {
		setTotal(event.target.value);
	};

	const handleUserId = (event) => {
		setUserId(event.target.value);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		console.log('getting into Cart form submit...');

		const newCart = await addNewCart({
			status,
			lastUpdated,
			total,
			userId,
		});

		console.log('the new cart is: ', newCart);
	};

	return (
		<div id='cart-container'>
			<h1>{user.firstName !== 'Guest' ? user.firstName + "'s" : ''} Cart</h1>
			<div className='cart'>
				<img className='image cart-field' src={process.env.PUBLIC_URL + product.image} width='50px' height='50px' />

				<p className='title cart-field'>{product.title}</p>

				<p className='quantity cart-field'>{product.quantity}</p>
				<p className='uptick cart-field tick'>&#11014;</p>
                <p className='downtick cart-field tick'>&#11015;</p>
				<p className='price cart-field'>{product.price}</p>
				<p className='total cart-field'>{product.total}</p>
			</div>
		</div>
	);
};
