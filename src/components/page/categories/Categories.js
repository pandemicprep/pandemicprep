import React from 'react';

import './Categories.css';

export const Categories = () => {

    return (
        <div className='category'>
            <h1>Categories</h1>

            <container className='productCategories'>
                <button className="cats">Working From Home</button>
                <button className="cats">Learning From Home</button>
                <button className="cats">Entertainment</button>
                <button className="cats">Supplies</button>
            </container>
        </div>
    )
}