import React, { useState } from 'react';

import './Categories.css';

import {getProductsByCategory} from '../../../../api/products';

export const Categories = ({setProducts, NavLink, setCategory}) => {

    const cat = [
        {name: 'school', image: '../../../../../public/images/school/mathblocks.jpg'},
        {name: 'work', image: '../../../../../public/images/school/mathblocks.jpg'}
    ];

    const categoryHandler = (category) => {
        setCategory(category.name);
        getProductsByCategory(category.name, 1)
            .then((response) => {
                setProducts(response)
            })
            .catch((error) => {
                console.error(error)
            })
    }

    return (
        <div className='category'>
            {cat.map((category, i) => {
                return (
                <NavLink key={i} to='/' onClick={() => {categoryHandler(category)}}>
                    <div key={i} className='category-tile' >
                        <img src='./categoryImages/mathblocks.jpg'  />
                        <p className='category-name'>{category.name}</p>
                    </div>
                </NavLink>
                )
            })}
        </div>
    )
}