import React, { useState } from 'react';

import './Categories.css';

import { getProductsByCategory } from '../../../../api/products';

export const Categories = ({ setProducts, NavLink }) => {
    const [categoryState, setCategoryState] = useState('');

    const cat = [
        { name: 'school', image: '../../../../../public/images/school/mathblocks.jpg' },
        { name: 'work', image: '../../../../../public/images/school/mathblocks.jpg' }
    ];

    const categoryHandler = (category) => {
        getProductsByCategory(category.name)
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
                    <NavLink key={i} to='/' onClick={() => { categoryHandler(category) }}>
                        <div key={i} className='category-tile' >
                            <img id="catStar" src={process.env.PUBLIC_URL + '/styleimages/star.png'} />
                            <p className='category-name'>{category.name}</p>
                        </div>
                    </NavLink>
                )
            })}
        </div>
    )
}