/** @format */

import React, { useState, useEffect } from "react";

import "./Userlist.css";

import { getAllUsers, addUser } from '../../../../api';
import { adminRegisterNewUser } from '../user/profileUtils';


export const Userlist = ({
    user, 
    adminView, 
    setAdminView,
    clickedIndex, 
    setClickedIndex,
    setUser,
    setCart
}) => {
    const [adminUserList, setAdminUserList] = useState([]);
    const [userPage, setUserPage] = useState(1);
    const [userPageLimit, setUserPageLimit] = useState(0);
    // Input values for add user
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [isAdmin, setIsAdmin] = useState(true);
    const [isUser, setIsUser] = useState(true);
    // Input values for edit one user
    const [editEmail, setEditEmail] = useState('');
    const [editPassword, setEditPassword] = useState('');
    const [editIsAdmin, setEditIsAdmin] = useState('');
    const [editIsUser, setEditIsUser] = useState('');
    const [edit, setEdit] = useState(false)

    useEffect(() => {
        getAllUsers(userPage, user.token)
            .then((response) => {
                console.log('response and adminPage', response)
                setAdminUserList(response[1]);
                setUserPageLimit(response[0]);
            })
            .catch((error) => {
                console.error(error)
            })
        console.log(adminUserList, 'adminUserList in use effect')
    }, [userPage, edit])

    // Input value handlers
    const handleFirstName = (event) => {
        setFirstName(event.target.value)
    }
    const handleLastName = (event) => {
        setLastName(event.target.value)
    }
    const handleEmail = (event) => {
        setEmail(event.target.value)
    }
    const handlePassword = (event) => {
        setPassword(event.target.value)
        setPassword2(event.target.value)
    }
    const handleIsAdmin = (event) => {
        console.log(event.target.checked, 'admin checked')
        setIsAdmin(event.target.checked)
    }
    const handleIsUser = (event) => {
        setIsUser(event.target.checked)
    }
    // form handler that allows admin to add a new user
    const adminAddUser = async (event) => {
        event.preventDefault();
        try {
            const newUser = await adminRegisterNewUser({
                firstName,
                lastName,
                email,
                password1: password,
                password2,
                isAdmin,
                isUser
            });
            console.log("new user from registration ", newUser);
        
        } catch (error) {
            throw error;
        }
    }
    // sets admin view which removes readonly from the inputs
    const enableEditMode = (event, index) => {
        event.preventDefault();
        setClickedIndex(index);
        if (adminView === 'none') {
            setAdminView('editOneProduct');
        }
    }

    const editUser = async (event, item) => {
        event.preventDefault();
        try {
            
        } catch (error) {
            throw error;
        }
    }

     // Pagination handlers
     const firstHandler = () => {
        setClickedIndex(-1);
        if (userPage > 1) {
            setUserPage(1);
        }
    }
    const prevHandler = () => {
        setClickedIndex(-1);
        if (userPage > 1) {
            setUserPage(userPage - 1);
        }
    }
    const nextHandler = () => {
        setClickedIndex(-1);
        if (userPage < userPageLimit) {
            setUserPage(userPage + 1);
        }
    }
    const lastHandler = () => {
        setClickedIndex(-1);
        if (userPage < userPageLimit) {
            setUserPage(userPageLimit);
        }
    }

    return (
        <div className="userList">
            <form id='admin-list-user' onSubmit={adminAddUser}>
                <span id='each-input'>First Name:
                    <input type='text' placeholder='First Name' value={firstName} onChange={handleFirstName}></input>
                </span>

                <span id='each-input'>Last Name:
                    <input type='text' placeholder='Last Name' value={lastName} onChange={handleLastName}></input>
                </span>

                <span id='each-input'>Email:
                    <input type='text' placeholder='email' value={email} onChange={handleEmail}></input>
                </span>
                
                <span id='each-input'>Password:
                    <input placeholder='password' value={password} onChange={handlePassword}></input>
                </span>

                <span id='each-input'>Is Admin:
                    <input type='checkbox' placeholder='isAdmin' defaultChecked={false} onChange={handleIsAdmin}></input>
                </span>
            
                <span id='each-input'>Is User:
                    <input type='checkbox' placeholder='isUser' defaultChecked={false} onChange={handleIsUser}></input>
                </span>
                
                <button>Add New</button>
            </form>
            { adminUserList.map((user, index) => {
                return (
                    <span key={index}>
                        { adminView === 'editOneProduct' &&  clickedIndex === index ? /**edit mode ternary */ 
                            <form id='admin-list' >
                            <span id='each-input'>Email:
                                <input type='text' placeholder={user.email} ></input>
                            </span>
                        
                            <span id='each-input'>Password:
                                <input id='checkbox' placeholder={user.password} ></input>
                            </span>

                            <span id='each-input'>Is Admin:
                                <input type='text' placeholder={user.isAdmin} ></input>
                            </span>
                        
                            <span id='each-input'>Is User:
                                <input type='text' placeholder={user.isUser} ></input>
                            </span>
                            
                            <button type='button' onClick={enableEditMode} >Edit</button>
                            {adminView === 'editOneProduct' ? <button >Authorize</button> : ''}
                        </form>
                        : 
                        <form id='admin-list' >
                            <span id='each-input'>Email:
                                <input type='text' placeholder={user.email} readOnly></input>
                            </span>
                        
                            <span id='each-input'>Password:
                                <input id='checkbox' placeholder={user.password} readOnly></input>
                            </span>

                            <span id='each-input'>Is Admin:
                                <input type='checkbox'  ></input>
                            </span>
                        
                            <span id='each-input'>Is User:
                                <input type='checkbox' ></input>
                            </span>
                            
                            <button type='button' onClick={(event) => {enableEditMode(event, index)}} >Edit</button>
                            {adminView === 'editOneProduct' ? <button >Authorize</button> : ''}
                        </form>
                        }
                    </span>
                )
            })}
             <div id='pagination'>
                { userPage === 1 ? ''
                :
                <>
                    <a href='#' onClick={firstHandler}>❮❮</a>
                    <a href='#' onClick={prevHandler}>❮</a>
                </>
                }  
                <a href='#'>{userPage}</a>
                { userPage === userPageLimit ? ''
                : 
                <>
                    <a href='#' onClick={nextHandler}>❯</a>
                    <a href='#' onClick={lastHandler}>❯❯</a>
                </>
                }
                
            </div>
        </div>
    );
};
