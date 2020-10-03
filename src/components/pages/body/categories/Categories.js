import React, { useState } from 'react';

import './Categories.css';

export const Categories = ({
    NavLink,
    setCategory,
    setPageType,
}) => {
    // const history = useHistory();
    const cat = [
        { name: 'School' },
        { name: 'Work' },
        { name: 'Household' },
        { name: 'Health' },
        { name: 'Protection' },
        { name: 'Groceries' },
        { name: 'Entertainment' },
    ];


    const categoryHandler = (category) => {
        setPageType('category');

        setCategory(category.name);

        // history.push('/productsview');
    }


    return (
        <div className='category'>
            {cat.map((category, i) => {
                return (
                    <NavLink key={i} to='/productsview' onClick={() => { categoryHandler(category) }}>
                        <div key={i} id='cat' className='category-tile' >
                            <button className='category-name'>{category.name}</button>
                        </div>
                    </NavLink>
                )
            })}
        </div>
    )
}