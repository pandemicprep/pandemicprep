import React, { useState, useEffect } from 'react';

import './Admin.css';

export const Admin = () => {
    const [adminInfo, setAdminInfo] = useState('products');
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

    return (
        <div id='admin'>
            {adminInfo === 'products' ?
                prodDummyArr.map((item) => {
                    return ( <span id='prod-list'>
                        <form>
                            <div>
                                 <p>ID:</p>
                                 <input type='text' readOnly placeholder={item.id}></input>
                            </div>
                            <div>
                                 <p>Title:</p>
                                 <input type='text' readOnly placeholder={item.title}></input>
                            </div>
                            <div>
                                 <p>Description:</p>
                                 <input type='text' readOnly placeholder={item.description}></input>
                            </div>
                            <div>
                                 <p>Price:</p>
                                 <input type='text' readOnly placeholder={item.price}></input>
                            </div>
                            <div>
                                 <p>Is Highlighted:</p>
                                 <input type='checkbox' readOnly placeholder={item.isHighlighted}></input>
                            </div>
                        </form>
                    </span>
                    )
                })
            : ''
            }
        </div>
    )
}