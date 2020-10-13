/** @format */

import React, { useState, useEffect } from 'react';

import './Sales.css';
import { getSalesReport } from '../../../../api';

export const Sales = ({ user }) => {
	const [salesReport, setSalesReport] = useState([]);
	const [clickedIndex, setClickedIndex] = useState(-1);
	const twentyTwenty = {
		january: [],
		february: [],
		march: [],
		april: [],
		may: [],
		june: [],
		july: [],
		august: [],
		september: [],
		october: [],
		november: [],
		december: []
	}

	useEffect(() => {
		getSalesReport(user.token)
			.then((response) => {
				response.forEach((item) => {
					if (item.date.substring(0, 7) === '2020-01') {
						twentyTwenty.january.push(item)
					} else if (item.date.substring(0, 7) === '2020-02') {
						twentyTwenty.february.push(item)
					} else if (item.date.substring(0, 7) === '2020-03') {
						twentyTwenty.march.push(item)
					} else if (item.date.substring(0, 7) === '2020-04') {
						twentyTwenty.april.push(item)
					} else if (item.date.substring(0, 7) === '2020-05') {
						twentyTwenty.may.push(item)
					} else if (item.date.substring(0, 7) === '2020-06') {
						twentyTwenty.june.push(item)
					} else if (item.date.substring(0, 7) === '2020-07') {
						twentyTwenty.july.push(item)
					} else if (item.date.substring(0, 7) === '2020-08') {
						twentyTwenty.august.push(item)
					} else if (item.date.substring(0, 7) === '2020-09') {
						twentyTwenty.september.push(item)
					} else if (item.date.substring(0, 7) === '2020-10') {
						twentyTwenty.october.push(item)
					} else if (item.date.substring(0, 7) === '2020-11') {
						twentyTwenty.november.push(item)
					} else if (item.date.substring(0, 7) === '2020-12') {
						twentyTwenty.december.push(item)
					}
				});
				setSalesReport(response.sort( compare ));
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);

	const compare = (a, b) => {
		if (a.date > b.date) {
			return 1;
		}
		if (a.date < b.date) {
			return -1;
		} 
		return 0;
	}
	// const toggleDetails = (index) => {
	// 	setClickedIndex(index);
	// };

	return (
		<div className='sales-container'>
			<div className='sales-report'>
			{Object.values(twentyTwenty).map((month, index) => {
				console.log(month, 'test')
				return(
					<div key={index} className='month-container'>
						<p className='month-h1'>{month}</p>
						<div className='report-titles'>
							<p className='each-title'>Date</p>
							<p className='each-title'>Total Items</p>
							<p className='each-title'>Total Revenue</p>
						</div>

						<div>

						</div>

					</div>
				)
			})}
			</div>
		</div>
	)
};
