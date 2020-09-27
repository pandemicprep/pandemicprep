/** @format */

import React, { useState, useEffect } from "react";


// import "./Productlist.css";
import '../MainBody.css';

import { Product } from './Product'

import {
    getProductsByQuery,
    addNewProduct,
    getProductById,
    getProductsByCategory
} from '../../../../api/products';
import { PageIndex } from "./PageIndex";


export const Productlist = ({
    products, 
    setProducts, 
    setProduct, 
    NavLink,
    searchString,
    category
}) => {
    const [categoryPage, setCategoryPage] = useState(1);
    const [searchPage, setSearchPage] = useState(1);

    // let active = 1;
    // let pages = [];
    // for (let number = 1; number <= 5; number++) {
    //     pages.push(
    //       <Pagination.Item key={number} active={number === active}>
    //         {number}
    //       </Pagination.Item>,
    //     );
    // }

    // const pagination = (
    //     <div>
    //         <Pagination>{pages}</Pagination>
    //     </div>
    // );
    


    return (
        <div className="productList">
            <p>List of Products</p>
            <h1>MainBody</h1>
            <div className="productContainer">
                {products.map((singleProduct, i) => {
                    return (
                        <NavLink key={i} to='/product' onClick={(event) => {setProduct(singleProduct)}}>
                            <div key={i} className="product" >
                                <div className="info">
                                    <p className="header">
                                        {singleProduct.title}
                                    </p>
                                    <p className="image">
                                        {singleProduct.imageURL}
                                    </p>
                                    <p className="price">
                                        {singleProduct.price}
                                    </p>
                                    <button>Add to Cart</button>
                                </div>
                            </div>
                        </NavLink>
                    )
                })}
                
            </div>
                <PageIndex />
        </div>
        
    );
};
