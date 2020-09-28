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
    searchObject,
    searchString,
    category,
    pageType,
    setPageType
}) => {
    const [categoryPage, setCategoryPage] = useState(1);
    const [searchPage, setSearchPage] = useState(1);
    


    return (
        <div className="productList">
            <p>List of Products</p>
            <h1>MainBody</h1>
            <PageIndex searchObject={searchObject} pageType={pageType} 
                           setPageType={setPageType} setProducts={setProducts}/>
            <div className="productContainer">
                {products.map((singleProduct, i) => {
                    return (
                        <NavLink key={i} to='/product' onClick={(event)  => {setProduct(singleProduct)}}>
                            <div key={i} className="product" >
                                <div id='product' className="info">
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
                
        </div>
        
    );
};
