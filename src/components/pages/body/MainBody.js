import React from 'react';

import './MainBody.css';
import { Categories, Productlist, Profile } from '../../index'

export const MainBody = () => {
    // const [bathCat, setBathCat] = useState([bathCat]);
    // const [search, setSearch] = useState([searcResults]);

    return (
        <div className='categoryContainer'>
            <Profile />
            {/* <Productlist products={bathCat} /> */}
            {/* <Productlist products={search} /> */}
            {/* <Categories /> */}
        </div>
    )
}

