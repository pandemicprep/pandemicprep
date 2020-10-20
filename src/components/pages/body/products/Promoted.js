/** @format */

import React, { useState, useEffect } from 'react';
import Slider from 'react-animated-slider';

import './Promoted.css';
import 'react-animated-slider/build/horizontal.css';

import { getPromotedProducts, getProductById } from '../../../../api/products';

export const Promoted = ({ NavLink, setProduct, useHistory }) => {
	const [content, setContent] = useState([]);
	const history = useHistory();

	useEffect(() => {
		getPromotedProducts()
			.then((response) => {
				setContent(response);
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);

	const fetchPromotedProduct = (item, index) => {
		
		getProductById(item.id)
			.then((response) => {
				setProduct(response);
				history.push('/product');
			})
			.catch((error) => {
				console.error(error);
			});
	};

	return (
		<div id='flexwrapper'>
			<div className='wrapper'>
				<h1>Featured Products</h1>
			</div>
			<Slider className='slider-wrapper'>
				{content.map((item, index) => (
					<div
						key={index}
						className='slider-content'
						style={{
							background: `url('${item.image}') no-repeat center center`,
						}}
						onClick={() => {
							fetchPromotedProduct(item, index);
						}}
					>
						<div className='inner'>
							<h1>{item.name}</h1>
							<p>{item.description}</p>
							<button id='promoButton'>
								${' '}
								{item.price.toLocaleString('en-US', {
									minimumFractionDigits: 2,
								})}
							</button>
						</div>
					</div>
				))}
			</Slider>
		</div>
	);
};
