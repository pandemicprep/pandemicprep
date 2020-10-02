import React, { useState } from 'react'
import Slider from "react-animated-slider";

import "./Promoted.css";
import "react-animated-slider/build/horizontal.css";

const content = [
    {
        name: "Rose Desk Kit",
        price: 19.99,
        description: "1* rosegold acrylic stapler, 1* rosegold acrylic tape dispenser,1* rosegold acrylic staple remover, 1000 pcs rosegold Standard staples.",
        image: "images/roseacry.jpg",
        category: "work"
    },
    {
        name: "Succulents",
        price: 19.99,
        description: "HAND SELECTED: Every pack of succulents we send is hand-picked. You will receive a unique collection of species that are FULLY ROOTED IN 2 INCH POTS.",
        image: "images/succ.jpg",
        category: "work health"
    },
    {
        name: "Cute Animal Erasers",
        price: 5.99,
        description: "Roll the eraser cleaner across paper, a desk, counter or table to pick up the annoying eraser fragments!",
        image: "images/anierasers.jpg",
        category: "school"
    },
    {
        name: "Tea Pot",
        price: 49.99,
        description: "Brew a delicious cup of tea in this glass tea press that utilizes the same brewing system as the French press; perfect for loose teas and tea bags.",
        image: "images/teapos.jpg",
        category: "work household groceries health"
    },
    {
        name: "24 inch Curved Monitor",
        price: 129.99,
        description: "1800R curve monitor the curved display delivers a revolutionary visual experience with a leading 1800R screen curvature as the images appear to wrap around you for an in depth, immersive experience.",
        image: "images/curved.jpg",
        category: "work school entertainment"
    },
    {
        name: "Sticky Memo Ball",
        price: 12.99,
        description: "Its 12 sticky sides each feature tear-off sticky memos in different colors so you can get creative with group brainstorming at work or keeping the whole family organized at home.",
        image: "images/stickymemoball.jpg",
        category: "work school"
    },
    {
        name: "Drafting Table",
        price: 129.99,
        description: "Table with Storage, Adjustable Drawing Desk Rolling Art Craft Station Writing Work Table with Drawers & Wheels.",
        image: "images/table.jpg",
        category: "work"
    },
    {
        name: "Sleek Filing Cabinet",
        price: 149.99,
        description: "The interlock system secures 3 drawers and comes with 2 keys to protect your files and valuables. As a safety mechanism to avoid tipping, only 1 drawer can be opened at a time.",
        image: "images/cab2.jpg",
        category: "work"
    },
    {
        name: "10 inch iPad",
        price: 299.99,
        description: "10.2-Inch Retina Display, 8MP back camera, 1.2MP FaceTime HD Front camera, up to 10 hours of battery life.",
        image: "images/ipad.jpg",
        category: "school work"
    }
]

export const Promoted = () => {

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
                        style={{ background: `url('${item.image}') no-repeat center center` }}
                    >
                        <div className="inner">
                            <h1>{item.name}</h1>
                            <p>{item.description}</p>
                            <button id="promoButton">${item.price}</button>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}









