import React, { useState } from 'react';

import './Reviews.css';
import { addNewReview, getReviewsByProductId } from '../../../../api/reviews';


export const Review = () => {
    const [creatorId, setCreatorId] = useState('');
    const [productId, setProductId] = useState('');
    const [description, setDescription] = useState('');
    const [score, setScore] = useState('');

    const handleCreatorId = (event) => {
        setCreatorId(event.target.value);
    }

    const handleProductId = (event) => {
        setProductId(event.target.value);
    }

    const handleDescription = (event) => {
        setDescription(event.target.value);
    }

    const handleScore = (event) => {
        setScore(event.target.value);
    }


    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('getting into addReview form submit...');

        const newReview = await addNewReview({
            creatorId,
            productId,
            score,
            description
        });

        console.log('the new review is: ', newReview);
    }

    const logReviewsByProduct = async (event) => {
        event.preventDefault();
        console.log('getting into logReviewsByProduct');

        const reviewsByProduct = await getReviewsByProductId(productId);

        console.log('reviews by product: ', reviewsByProduct);
    }
    

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                placeholder='creatorId'
                value={creatorId}
                onChange={handleCreatorId}
                />

                <input
                placeholder='productId'
                value={productId}
                onChange={handleProductId}
                />

                <input
                placeholder='score'
                value={score}
                onChange={handleScore}
                />

                <input
                placeholder='description'
                value={description}
                onChange={handleDescription}
                />

                <button/>
            </form>

            <form onSubmit={logReviewsByProduct}>
                <input 
                    placeholder='search reviews by product'
                    value={productId}
                    onChange={handleProductId}
                />
                <button />
            </form>
        </div>
    )
}