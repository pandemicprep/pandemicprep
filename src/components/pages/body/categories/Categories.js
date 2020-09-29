import React, { useState } from 'react';

import './Categories.css';

import { getProductsByCategory } from '../../../../api/products';


export const Categories = ({
    setProducts,
    NavLink,
    setCategory,
    setPageType,
    pageType,
    setSearchObject
}) => {

    const cat = [
        { name: 'School', image: '../../../../../public/images/school/mathblocks.jpg' },
        { name: 'Work', image: '../../../../../public/images/school/mathblocks.jpg' },
        { name: 'Household', image: '../../../../../public/images/school/mathblocks.jpg' },
        { name: 'Health', image: '../../../../../public/images/school/mathblocks.jpg' },
        { name: 'Protection', image: '../../../../../public/images/school/mathblocks.jpg' },
        { name: 'Groceries', image: '../../../../../public/images/school/mathblocks.jpg' },
        { name: 'Entertainment', image: '../../../../../public/images/school/mathblocks.jpg' },
    ];

    const categoryHandler = (category) => {
        setPageType('category');
        // console.log('page type in categories', pageType)
        setCategory(category.name);
        getProductsByCategory(category.name, 1)
            .then((response) => {
                setSearchObject({ pageCount: response[0], categoryName: category.name })
                setProducts(response[1])
            })
            .catch((error) => {
                console.error(error)
            })
    }
    console.log('page type in categories', pageType)

    return (
        <div className='category'>
            {cat.map((category, i) => {
                return (
                    <NavLink key={i} to='/' onClick={() => { categoryHandler(category) }}>
                        <div key={i} id='cat' className='category-tile' >
                            <button className='category-name'>{category.name}</button>
                        </div>
                    </NavLink>
                )
            })}
        </div>
    )
}