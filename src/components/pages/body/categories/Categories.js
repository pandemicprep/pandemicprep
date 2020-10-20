/** @format */

import React from "react";

import "./Categories.css";

export const Categories = ({ NavLink, category, setCategory, categoryList, setPageType }) => {

    const categoryHandler = (selectedCat, i) => {
        setPageType("category");
        setCategory(selectedCat.name);
    };

    
    

    return (
        <div className="category">
            {categoryList.map((item, i) => {
                return (
                    <NavLink
                        key={i}
                        to="/productsview"
                        onClick={() => {
                            categoryHandler(item, i);
                        }}
                    >
                        <div key={i} id="cat" className="category-tile">
                            {category === item.name ? (
                                <button className="category-name redCat">{item.name}</button>
                            ) : (
                                <button className="category-name">{item.name}</button>
                            )}
                        </div>
                    </NavLink>
                );
            })}
        </div>
    );
};
