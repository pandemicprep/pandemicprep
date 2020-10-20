import React from 'react';
import './Success.css';
import { useHistory } from 'react-router-dom';

export const Success = () => {
    const history = useHistory()
    return (
        <div className='success-div' >
            <h1 className='thankyou' >Thank you for your purchase!</h1>
            <button id='success-button' onClick={() => {
                history.push('/');
            }}>Continue Shopping</button>
        </div>
    )
}