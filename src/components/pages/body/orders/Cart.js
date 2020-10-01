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
            <div className='cart-titles'>
                <span className='cart-title'>Product</span>
                <span className='cart-quantity'>Quantity</span>
                <span className='cart-price'>Price</span>
                <span className='cart-total'>Total</span>
            </div>
			<div className='cart-grid'>
				<img className='image cart-field' src={process.env.PUBLIC_URL + product.image} />
                <input type='text' readOnly placeholder={product.title} />
                <input type='text' readOnly placeholder={product.quantity} />
                <span className='uptick cart-field tick'>&#11014;</span>
                <span className='downtick cart-field tick'>&#11015;</span>
                <input type='text' readOnly placeholder={product.price} />
                <input type='text' readOnly placeholder={product.total} />
			</div>
            <div className='total-container'>
                <span className='total-title total'>Cart Summary</span>
                <span className='total-amount total'>$17.00</span>
                <span className='total-shipping total'>$5.00</span>
                <span className='total-total total'>$23.00</span>
            </div>
		</div>
    
	);
};
