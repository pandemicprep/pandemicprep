import React from 'react';

import './MainBody.css';
import { Categories, Productlist, Profile } from '../../index'

export const MainBody = () => {

    return (
        <div className='categoryContainer'>
            <Profile />
            {/* <Productlist /> */}
            
            {/* <Categories /> */}
        </div>
    )
}