/** @format */

import React, { useState, useEffect } from "react";

import "./Userlist.css";

import { getAllUsers } from '../../../../api';


export const Userlist = ({user}) => {
    const [adminUserList, setAdminUserList] = useState([]);
    const [userPage, setUserPage] = useState(1);
    const [userPageLimit, setUserPageLimit] = useState(0);
    // Input values for add user
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isAdmin, setIsAdmin] = useState('');
    const [isUser, setIsUser] = useState('');
    // Input value handlers
    const handleEmail = (event) => {
        setEmail(event.target.value)
    }
    const handlePassword = (event) => {
        setPassword(event.target.value)
    }
    const handleIsAdmin = (event) => {
        setIsAdmin(event.target.value)
    }
    const handleIsUser = (event) => {
        setIsUser(event.target.value)
    }



    useEffect(() => {
        setUserPage(1)
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
    }, [userPage])

    return (
        <div className="userList">
            <form id='admin-list' >
                <span id='each-input'>Email:
                    <input type='text' placeholder='email' value={email} onChange={handleEmail}></input>
                </span>
            
                <span id='each-input'>Password:
                    <input id='checkbox' placeholder='password' value={password} onChange={handlePassword}></input>
                </span>

                <span id='each-input'>Is Admin:
                    <input type='text' placeholder='isAdmin' value={isAdmin} onChange={handleIsAdmin}></input>
                </span>
            
                <span id='each-input'>Is User:
                    <input type='text' placeholder='isUser' value={isUser} onChange={handleIsUser}></input>
                </span>
                
                <button>Add New</button>
            </form>
            { adminUserList.map((user) => {
                return (
                    <span>
                        <form id='admin-list' >
                            <span id='each-input'>Email:
                                <input type='text' placeholder={user.email} readOnly></input>
                            </span>
                        
                            <span id='each-input'>Password:
                                <input id='checkbox' placeholder={user.password} readOnly></input>
                            </span>

                            <span id='each-input'>Is Admin:
                                <input type='text' placeholder={user.isAdmin} readOnly></input>
                            </span>
                        
                            <span id='each-input'>Is User:
                                <input type='text' placeholder={user.isUser} readOnly></input>
                            </span>
                            
                            <button>Edit</button>
                        </form>
                    </span>
                )
            })}
        </div>
    );
};
