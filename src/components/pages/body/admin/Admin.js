import React, { useState, useEffect } from 'react';

import './Admin.css';

export const Admin = () => {
    const [adminInfo, setAdminInfo] = useState('products');
    const [adminProductList, setAdminProductList] = useState([]);
    const prodDummyArr = [
        {id: '1', title: 'title', description: 'description', price: 'price', isHighlighted: 'true'},
        {id: '1', title: 'title', description: 'description', price: 'price', isHighlighted: 'true'},
        {id: '1', title: 'title', description: 'description', price: 'price', isHighlighted: 'true'},
        {id: '1', title: 'title', description: 'description', price: 'price', isHighlighted: 'true'},
        {id: '1', title: 'title', description: 'description', price: 'price', isHighlighted: 'true'},
        {id: '1', title: 'title', description: 'description', price: 'price', isHighlighted: 'true'}
    ]
    const usersDummyArr = [
        {id: '1', isAdmin: 'false', isUser: 'true', email: 'email', password: 'password'},
        {id: '1', isAdmin: 'false', isUser: 'true', email: 'email', password: 'password'},
        {id: '1', isAdmin: 'false', isUser: 'true', email: 'email', password: 'password'},
        {id: '1', isAdmin: 'false', isUser: 'true', email: 'email', password: 'password'},
        {id: '1', isAdmin: 'false', isUser: 'true', email: 'email', password: 'password'},
        {id: '1', isAdmin: 'false', isUser: 'true', email: 'email', password: 'password'}
    ]
    const cartsDummyArr = [

    ]

    /** different components we may want inside the admin tab
     * list of all products(most likely pagination)
     * list of all users(most likely pagination)
     * list of all carts by a user(will get rendered by clicking on a specific user)
     * 
     */

    
    const adminProductSearch = () => {

    }

    return (
        <div id='admin'>
            {adminInfo === 'products' ?
                prodDummyArr.map((item) => {
                    return (
                    <span>
                        <form id='prod-list'>
                           
                            <span id='each-input'>Title:
                                <input type='text' readOnly placeholder={item.title}></input>
                            </span>
                        
                            <span id='each-input'>Description:
                                <input type='text' readOnly placeholder={item.description}></input>
                            </span>
                        
                            <span id='each-input'>Price:
                                <input type='text' readOnly placeholder={item.price}></input>
                            </span>
                        
                            <span id='each-input'>ImageURL:
                                <input id='checkbox' readOnly placeholder={item.image}></input>
                            </span>
                            
                            <button>Edit</button>
                        </form>
                    </span>
                    )
                })
            : ''
            }
        </div>
    )
}