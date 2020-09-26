/** @format */

import React from "react";

import "./MainBody.css";
import { Categories, Productlist, Profile, AddProduct, Cart, Review } from "../../index";

export const MainBody = ({products, setProducts, searchString, setSearchString}) => {
    // const [bathCat, setBathCat] = useState([bathCat]);
    // const [search, setSearch] = useState([searcResults]);

    return (
        <div className="categoryContainer">
            {/* <Profile /> */}
            <Productlist products={products} setProducts={setProducts}
            searchString={searchString} setSearchString={setSearchString}/>
            <Categories />
            {/* <AddProduct /> */}
            {/* <Cart /> */}

            {/* // 			<Review /> */}
        </div>
    );
};
