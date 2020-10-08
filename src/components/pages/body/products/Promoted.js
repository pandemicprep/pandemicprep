/** @format */

import React, { useState } from "react";
import Slider from "react-animated-slider";

import "./Promoted.css";
import "react-animated-slider/build/horizontal.css";

import { getProductById } from "../../../../api/products";

const content = [
    {
        id: 144,
        name: "Succulents",
        price: 19.99,
        description:
            "HAND SELECTED: Every pack of succulents we send is hand-picked. You will receive a unique collection of species that are FULLY ROOTED IN 2 INCH POTS.",
        image: "images/succ.jpg",
        category: "work health",
    },
    {
        id: 182,
        name: "Space Icecream",
        price: 6.99,
        description: "Freeze dried icecream bar.",
        image: "images/space-icecream.jpg",
        category: "groceries",
    },
    {
        id: 116,
        name: "Colorful Blank Notebook",
        price: 9.99,
        description:
            "Pretty design, made with high quality paper and covers for easy writing and durability.",
        image: "images/colornotebook.jpg",
        category: "work school entertainment",
    },
    {
        id: 105,
        name: "Tea Pot",
        price: 49.99,
        description:
            "Brew a delicious cup of tea in this glass tea press that utilizes the same brewing system as the French press; perfect for loose teas and tea bags.",
        image: "images/teapos.jpg",
        category: "work household groceries health",
    },
    {
        id: 91,
        name: "24 inch Curved Monitor",
        price: 129.99,
        description:
            "1800R curve monitor the curved display delivers a revolutionary visual experience with a leading 1800R screen curvature as the images appear to wrap around you for an in depth, immersive experience.",
        image: "images/curved.jpg",
        category: "work school entertainment",
    },
    {
        id: 81,
        name: "Sticky Memo Ball",
        price: 12.99,
        description:
            "Its 12 sticky sides each feature tear-off sticky memos in different colors so you can get creative with group brainstorming at work or keeping the whole family organized at home.",
        image: "images/stickymemoball.jpg",
        category: "work school",
    },
    {
        id: 82,
        name: "Drafting Table",
        price: 129.99,
        description:
            "Table with Storage, Adjustable Drawing Desk Rolling Art Craft Station Writing Work Table with Drawers & Wheels.",
        image: "images/table.jpg",
        category: "work",
    },
    {
        id: 228,
        name: "Snow Ghillie Suit",
        price: 1099.99,
        description: "Be invisible in the snow.",
        image: "images/helikon_ghillie_snow_camo.jpg",
        category: "protection",
    },
    {
        id: 71,
        name: "10 inch iPad",
        price: 299.99,
        description:
            "10.2-Inch Retina Display, 8MP back camera, 1.2MP FaceTime HD Front camera, up to 10 hours of battery life.",
        image: "images/ipad.jpg",
        category: "school work",
    },
    {
        id: 189,
        name: "Natalies' Bananas",
        price: 999999.99,
        description: "Grants one the power to code without any bugs....also tastes good.",
        image: "images/banana.png",
        category: "grocery school work protection",
    },
];

export const Promoted = ({ NavLink, setProduct, useHistory }) => {
    const history = useHistory();

    const fetchPromotedProduct = (item, index) => {
        console.log(item, index, "item, index in fetch promoted product");
        getProductById(item.id)
            .then((response) => {
                console.log("response in fetch promoted, ", response);
                setProduct(response);
                history.push("/product");
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div id="flexwrapper">
            <div className="wrapper">
                <h1>Featured Products</h1>
            </div>
            <Slider className="slider-wrapper">
                {content.map((item, index) => (
                    <div
                        key={index}
                        className="slider-content"
                        style={{
                            background: `url('${item.image}') no-repeat center center`,
                        }}
                        onClick={() => {
                            fetchPromotedProduct(item, index);
                        }}
                    >
                        <div className="inner">
                            <h1>{item.name}</h1>
                            <p>{item.description}</p>
                            <button id="promoButton">
                                ${" "}
                                {item.price.toLocaleString("en-US", {
                                    minimumFractionDigits: 2,
                                })}
                            </button>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};
