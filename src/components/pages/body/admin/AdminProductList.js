import React, { useState, useEffect } from 'react';

import './AdminProductList.css';

import { getAllProducts, addNewProduct } from '../../../../api/index';

export const AdminProductList = () => {
    const [adminProductList, setAdminProductList] = useState([]);
    const [adminPage, setAdminPage] = useState(1);
    const [adminPageLimit, setAdminPageLimit] = useState(0);
    // input values for adding new product
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState(''); 
    const [price, setPrice] = useState(''); 
    const [imageURL, setImageURL] = useState(''); 

    
    useEffect(() => {
        getAllProducts(adminPage)
            .then((response) => {
                console.log('response and adminPage', response, adminPage)
                setAdminProductList(response[1]);
                setAdminPageLimit(response[0]);
            })
            .catch((error) => {
                console.error(error);
            })
    }, [adminPage])

    // Input value handlers
    const handleTitle = (event) => {
        setTitle(event.target.value);
    }
    const handleDescription = (event) => {
        setDescription(event.target.value);
    }
    const handlePrice = (event) => {
        setPrice(event.target.value);
    }
    const handleImageURL = (event) => {
        setImageURL(event.target.value);
    }
    const adminAddProduct = async (event) => {
        event.preventDefault();
        console.log('getting into add product subimt', imageURL)

        try {
            const newProduct = await addNewProduct({
                name: title,
                description,
                price,
                imageURL
            })
            console.log(newProduct, 'newProduct in addproduct submit')
            return newProduct;
        } catch (error) {
            throw error;
        }
    }

    // Pagination handlers
    const firstHandler = () => {
        if (adminPage > 1) {
            setAdminPage(1);
        }
    }
    const prevHandler = () => {
        if (adminPage > 1) {
            setAdminPage(adminPage - 1);
        }
    }
    const nextHandler = () => {
        if (adminPage < adminPageLimit) {
            setAdminPage(adminPage + 1);
        }
    }
    const lastHandler = () => {
        if (adminPage < adminPageLimit) {
            setAdminPage(adminPageLimit);
        }
    }

    return (
        <div id='admin'>
            <form id='admin-list' onSubmit={adminAddProduct}>
                <span id='each-input'>Title:
                    <input type='text' placeholder='title' value={title} onChange={handleTitle}></input>
                </span>
            
                <span id='each-input'>Description:
                    <input type='text' placeholder='description' value={description} onChange={handleDescription}></input>
                </span>
            
                <span id='each-input'>Price:
                    <input type='text' placeholder='price' value={price} onChange={handlePrice}></input>
                </span>
            
                <span id='each-input'>ImageURL:
                    <input id='checkbox' placeholder='imageUrl' value={imageURL} onChange={handleImageURL}></input>
                </span>
                
                <button>Add New</button>
            </form>
            { adminProductList.map((item) => {
                    return (
                    <span>
                        <form id='admin-list'>
                           
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
                            <button>Delete</button>
                        </form>
                    </span>
                    )
                })
           
            }
            <div id='pagination'>
                { adminPage === 1 ? ''
                :
                <>
                    <a href='#' onClick={firstHandler}>❮❮</a>
                    <a href='#' onClick={prevHandler}>❮</a>
                </>
                }  
                <a href='#'>{adminPage}</a>
                { adminPage === adminPageLimit ? ''
                : 
                <>
                    <a href='#' onClick={nextHandler}>❯</a>
                    <a href='#' onClick={lastHandler}>❯❯</a>
                </>
                }
                
            </div>
        </div>
    )

}