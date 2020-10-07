import React, { useState } from 'react';

import './Categories.css';


export const Categories = ({
    NavLink,
    setCategory,
    setPageType,
}) => {
    // const history = useHistory();
    const [clickedIndex, setClickedIndex] = useState(-1)
    const cat = [
        { name: 'School' },
        { name: 'Work' },
        { name: 'Household' },
        { name: 'Health' },
        { name: 'Protection' },
        { name: 'Groceries' },
        { name: 'Entertainment' },
    ];


    const categoryHandler = (category, i) => {
        setClickedIndex(i)
        setPageType('category');
        setCategory(category.name);
    }

    return (
        <div className='category'>
            {cat.map((category, i) => {
                return (
                    <NavLink key={i} to='/productsview' onClick={() => { categoryHandler(category, i) }}>
                        <div key={i} id='cat' className='category-tile' >
                            {clickedIndex === i ?
                                <button className='category-name active-button'>{category.name}</button>
                                :
                                <button className='category-name'>{category.name}</button>
                            }
                        </div>
                    </NavLink>
                )
            })}
        </div>
    )
}
