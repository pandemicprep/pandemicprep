/** @format */

import React from "react";

import "./MainBody.css";
import { Categories, Productlist, Profile, AddProduct, Cart, Review } from "../../index";

export const MainBody = () => {
    // const [bathCat, setBathCat] = useState([bathCat]);
    // const [search, setSearch] = useState([searcResults]);

    return (
        <div className="categoryContainer">
            {/* <Profile /> */}
            <Productlist />
            {/* <Categories /> */}
            {/* <AddProduct /> */}
            {/* <Cart /> */}

            {/* // 			<Review /> */}
        </div>
    );
};
