import React, { useState, useEffect } from 'react';

import './AdminProductList.css';

import { getAllProducts, addNewProduct, updateProduct } from '../../../../api/index';

export const AdminProductList = ({
    user
}) => {
    const [adminProductList, setAdminProductList] = useState([]);
    const [adminPage, setAdminPage] = useState(1);
    const [adminPageLimit, setAdminPageLimit] = useState(0);
    const [adminView, setAdminView] = useState('none');
    const [clickedIndex, setClickedIndex] = useState(-1);

    // input values for adding new product
    const [title, setTitle] = useState('');
    const [categories, setCategories] = useState('')
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [imageURL, setImageURL] = useState('');
    const [isActive, setIsActive] = useState(true)
    // input values for editing a product
    const [edit, setEdit] = useState(false)
    const [editTitle, setEditTitle] = useState('');
    const [editDescription, setEditDescription] = useState('');
    const [editPrice, setEditPrice] = useState('');
    const [editImageURL, setEditImageURL] = useState('');
    const [editCategories, setEditCategories] = useState('')
    const resetInputs = () => {
        setEditTitle('')
        setEditDescription('')
        setEditPrice('')
        setEditImageURL('')
    }


    useEffect(() => {
        setAdminView('none');
        setTitle('');
        setDescription('');
        setPrice('');
        setImageURL('');
        getAllProducts(adminPage, user.token)
            .then((response) => {
                setAdminProductList(response[1]);
                setAdminPageLimit(response[0]);
            })
            .catch((error) => {
                console.error(error);
            })
    }, [adminPage, edit])

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
    const handleCategories = (event) => {
        setCategories(event.target.value)
    }
    const adminAddProduct = async (event) => {
        event.preventDefault();
        console.log('getting into add product subimt', imageURL)

        try {
            const newProduct = await addNewProduct({
                name: title,
                description,
                price,
                imageURL,
                category: categories
            })
            console.log(newProduct, 'newProduct in addproduct submit')
            return newProduct;
        } catch (error) {
            throw error;
        }
    }

    const enableEditMode = (index, item) => {
        setClickedIndex(index);
        if (adminView === 'none') {
            setAdminView('editOneProduct');
        }
    }
    const editProduct = async (event, item) => {
        event.preventDefault()
        try {

            const fields = {
                title: editTitle === '' ? item.title : editTitle,
                description: editDescription === '' ? item.description : editDescription,
                price: editPrice === '' ? parseFloat(item.price).toFixed(2) : parseFloat(editPrice).toFixed(2),
                image: editImageURL === '' ? item.imageURL : editImageURL,
                isActive: isActive
            }

            const updatedProduct = await updateProduct({ id: item.id, fields: fields, token: user.token });


            setAdminView('none');
            setEdit(!edit);
        } catch (error) {
            throw error;
        }
    }

    // Pagination handlers
    const firstHandler = () => {
        setClickedIndex(-1);
        if (adminPage > 1) {
            setAdminPage(1);
        }
    }
    const prevHandler = () => {
        setClickedIndex(-1);
        if (adminPage > 1) {
            setAdminPage(adminPage - 1);
        }
    }
    const nextHandler = () => {
        setClickedIndex(-1);
        if (adminPage < adminPageLimit) {
            setAdminPage(adminPage + 1);
        }
    }
    const lastHandler = () => {
        setClickedIndex(-1);
        if (adminPage < adminPageLimit) {
            setAdminPage(adminPageLimit);
        }
    }


    return (
        <div id='admin'>
            <h1 id="productH1">Add New Product:</h1>
            {adminPage === 1 ?
                <form id='admin-list' onSubmit={adminAddProduct}>
                    <span className='each-input' id="title">Title & Price:
                    <input type='text' placeholder='Title' value={title} onChange={handleTitle}></input>

                        <input type='text' placeholder='Price' value={price} onChange={handlePrice}></input>
                    </span>

                    <span className='each-input' id="description2">Description:
                    <input type='text' placeholder='Description' value={description} onChange={handleDescription}></input>
                    <input type='text' placeholder='Category' value={categories} onChange={handleCategories}></input>
                    </span>

                    <span className='each-input' id="image">Image URL:
                    <input id='checkbox' placeholder='Image URL' value={imageURL} onChange={handleImageURL}></input>
                        <button id="addNew">Add New</button>
                    </span>


                </form> : ''}
            <h1 id="productH1">Edit Existing Product:</h1>
            {adminProductList.map((item, index) => {
                return (
                    <span key={index}>
                        {/* ternary that renders two different forms, one of which allowing the inputs to be edited */}
                        {adminView === 'editOneProduct' && clickedIndex === index ? /**edit mode ternary */
                            <form id='admin-list' onSubmit={(event) => editProduct(event, item)}>
                                <span className='each-input' id="title">Title & Price:
                                    <input type='text' placeholder={item.title}
                                        value={editTitle} onChange={(event) => { setEditTitle(event.target.value) }}></input>
                                    <input type='text' id='price-input' placeholder={item.price}
                                        value={editPrice} onChange={(event) => { setEditPrice(event.target.value) }}></input>
                                </span>

                                <span className='each-input' id="description">Description:
                                    <input type='text' placeholder={item.description}
                                    value={editDescription} onChange={(event) => { setEditDescription(event.target.value) }} ></input>

                                     <input type='text' placeholder={item.categories}></input>
                                </span>

                                <span className='each-input' id="image">Image URL:
                                    <input id='checkbox' placeholder={item.image}
                                        value={item.image} onChange={(event) => { setEditImageURL(event.target.value) }}></input>


                                    {item.isActive ?
                                        <span id="active">Active:
                                            <input id="activeCheck" type='checkbox' defaultChecked={item.isActive}
                                                onClick={(event) => { isActive ? setIsActive(false) : setIsActive(true) }}></input>
                                        </span>
                                        :
                                        <span id="active">Active:
                                        <   input id="activeCheck" type='checkbox' defaultChecked={item.isActive}
                                                onClick={(event) => { isActive ? setIsActive(false) : setIsActive(true) }}></input>
                                        </span>
                                    }
                                </span>
                                
                                <span id='button-span'>
                                    <button id="addNew" type='button' onClick={enableEditMode} >Edit</button>
                                    {adminView === 'editOneProduct' ? <button id="auth" >Authorize</button> : ''}
                                </span>

                            </form>
                            :
                            <form id='admin-list'>
                                <span className='each-input' id="title">Title & Price:
                                    <input type='text' readOnly placeholder={item.title} value={item.title}></input>
                                    <input type='text' id='price-input' readOnly placeholder={item.price} value={item.price}></input>
                                </span>

                                <span className='each-input' id="description">Description:
                                    <input type='text' readOnly placeholder={item.description} value={item.description}></input><br></br>
                                    
                                    <input type='text' placeholder={item.categories}></input>
                                </span>



                                <span className='each-input' id="image">Image URL:
                                    <input id='checkbox' readOnly placeholder={item.imageURL} value={item.image}></input>
                                    {item.isActive ?
                                        <span id='active'>Active:
                                            <input type='checkbox' id="activeCheck" checked ></input>
                                        </span>
                                        :
                                        <span id='active'>Active:
                                            <input type='checkbox' id="activeCheck" ></input>
                                        </span>
                                    }
                                </span>

                                <span id='button-span' >
                                    <button id="addNew" type='button' onClick={() => { enableEditMode(index, item) }} >Edit</button>
                                    {adminView === 'editOneProduct' ? <button id="auth">Authorize</button> : ''}
                                </span>




                            </form>
                        }


                    </span>
                )
            })

            }
            <div id='pagination'>
                {adminPage === 1 ? ''
                    :
                    <>
                        <a href='#' onClick={firstHandler}>❮❮</a>
                        <a href='#' onClick={prevHandler}>❮</a>
                    </>
                }
                <a href='#'>{adminPage}</a>
                {adminPage === adminPageLimit ? ''
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

