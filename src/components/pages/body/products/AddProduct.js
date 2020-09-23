import React, { useState } from 'react';

import './AddProduct.css';
import { addNewProduct } from '../../../../api';

export const AddProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');

    const handleName = (event) => {
        setName(event.target.value);
    }

    const handlePrice = (event) => {
        setPrice(event.target.value);
    }

    const handleDescription = (event) => {
        setDescription(event.target.value);
    }

    const handleImage = (event) => {
        setImage(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('getting into addProduct form submit...');

        const newProduct = await addNewProduct({
            name,
            price,
            description,
            image
        });

        console.log('the new product is: ', newProduct);
    }
    

    return (
        <form onSubmit={handleSubmit}>
            <input
            placeholder='name'
            value={name}
            onChange={handleName}
            />

            <input
            placeholder='price'
            value={price}
            onChange={handlePrice}
            />

            <input
            placeholder='description'
            value={description}
            onChange={handleDescription}
            />

            <input
            placeholder='image'
            value={image}
            onChange={handleImage}
            />

            <button/>
        </form>
    )

}