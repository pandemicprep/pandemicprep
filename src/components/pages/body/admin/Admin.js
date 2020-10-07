import React, { useState, useEffect } from 'react';

import {AdminProductList, Userlist, OrdersProcessing} from '../../../index';
import './Admin.css';
import { Sales } from './Sales';

export const Admin = ({
    user,
    setUser,
    setCart
}) => {
    const [adminView, setAdminView] = useState('none');
    const [clickedIndex, setClickedIndex] = useState(-1);   

   

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
            <button onClick={() => {setAdminView('processing')}}>Processing Orders</button>
            <button onClick={() => {setAdminView('sales')}}>Sales Report</button>
        </div>

        {adminView === 'none' ? <div id="adminDiv"><h1 id="adminh1">Welcome Admin!</h1></div>: ''}

        {adminView === 'products' ? <AdminProductList 
                                    user={user}
                                    adminView={adminView}
                                    setAdminView={setAdminView}
                                    clickedIndex={clickedIndex}
                                    setClickedIndex={setClickedIndex}
                                    /> : ''}
        {adminView === 'users' ? <Userlist      
                                user={user}
                                adminView={adminView}
                                setAdminView={setAdminView}
                                clickedIndex={clickedIndex}
                                setClickedIndex={setClickedIndex}
                                setUser={setUser}
                                setCart={setCart}
                                /> : ''}
        {adminView === 'processing' ? <OrdersProcessing 
                                        user={user}
                                    /> : ''}
        {adminView === 'sales' ? <Sales 
                                /> : ''}
        </>
    )
}


/** Products(dropdown)
 * add product
 * 
 */