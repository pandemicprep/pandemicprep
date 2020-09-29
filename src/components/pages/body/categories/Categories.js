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
        { name: 'school', image: '../../../../../public/images/school/mathblocks.jpg' },
        { name: 'work', image: '../../../../../public/images/school/mathblocks.jpg' },
        { name: 'work', image: '../../../../../public/images/school/mathblocks.jpg' },
        { name: 'work', image: '../../../../../public/images/school/mathblocks.jpg' },
        { name: 'work', image: '../../../../../public/images/school/mathblocks.jpg' },
        { name: 'work', image: '../../../../../public/images/school/mathblocks.jpg' },
        { name: 'work', image: '../../../../../public/images/school/mathblocks.jpg' },
    ];

    const categoryHandler = (category) => {
        setPageType('category');
        // console.log('page type in categories', pageType)
        setCategory(category.name);
        getProductsByCategory(category.name, 1)
            .then((response) => {
                setSearchObject({pageCount: response[0], categoryName: category.name})
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
                            <img id="catStar" src={process.env.PUBLIC_URL + '/styleimages/star.png'} />
                            <p className='category-name'>{category.name}</p>
                        </div>
                    </NavLink>
                )
            })}
        </div>
    )
}