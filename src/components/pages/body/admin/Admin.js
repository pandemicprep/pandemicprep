import React, { useState, useEffect } from 'react';

import {AdminProductList, Userlist} from '../../../index';
import './Admin.css';

export const Admin = ({user}) => {
    const [adminView, setAdminView] = useState('');
    
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
        <>
        <div id='admin-nav'>
            <button onClick={() => {setAdminView('products')}}>Products</button>
            <button onClick={() => {setAdminView('users')}}>Users</button>
            <button>Processing Orders</button>
            <button>Sales Report</button>
        </div>

        {adminView === 'products' ? <AdminProductList user={user}/> : ''}
        {adminView === 'users' ? <Userlist user={user}/> : ''}
        </>
    )
}


/** Products(dropdown)
 * add product
 * 
 */