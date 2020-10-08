/** @format */

import React, { useState, useEffect } from "react";

import { addUser, getAllUsers, getProductsByQuery, loginUser, getFullUserFromToken } from "../../../../api";

import {
    states,
    countries,
    registrationHandler,
    loginHandler,
    guestHandler,
    updateHandler,
} from "./profileUtils";

import "./Profile.css";

export const Profile = ({ view, setView, setUser, user, useHistory, setCart, setCartSize }) => {
    //CURRENT VIEWS: login register guest userCheckout edit
    //CHANGE PASSWORD BUTTON: needs onclick function to switch state to ''
    //SET UP STATES FOR DIFFERENT VIEWS! :)

    const [isUser, setIsUser] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");
    const [address1, setAddress1] = useState("");
    const [address2, setAddress2] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [country, setCountry] = useState("");
    const [phone, setPhone] = useState("");
    const [creditCard, setCreditCard] = useState(
        Math.floor(Math.random() * (9999999999999999 - 1000000000000000 + 1)) + 1000000000000000
    );
    const [searchString, setSearchString] = useState("");
    const history = useHistory();


    


    if (view === "edit" || view === "fulledit") {
        if (!user.isUser) {
            history.push("/");
        }
    }

    useEffect(() => {
        if (view === 'edit' || view === 'fulledit') {
            getFullUserFromToken(user.id, user.token).then(result => {
                setFirstName(result.firstName);
                setLastName(result.lastName);
                setEmail(result.email);
                setAddress1(result.addressLine1);
                setAddress2(result.addressLine2);
                setCity(result.city);
                setState(result.state);
                setZipcode(result.zipcode);
                setCountry(result.country);
                setPhone(result.phone);
            })
            
        }
    }, [])


    const cancelHandler = (event) => {
        event.preventDefault();
        resetForm();
    };

    const passwordButtonHandler = (event) => {
        event.preventDefault();
        setView("fulledit");
    };

    const formHandler = async (event) => {
        event.preventDefault();

        try {
            //Registration
            if (view === "register") {
                const newUser = await registrationHandler({
                    firstName,
                    lastName,
                    email,
                    password1,
                    password2,
                });
                console.log("new user from registration ", newUser);
                setUser({
                    id: newUser.id,
                    firstName: newUser.firstName,
                    isAdmin: newUser.isAdmin,
                    isUser: newUser.isUser,
                    token: newUser.token,
                });
                setCart(newUser.activeCart);
                setCartSize(newUser.activeCart.cartQuantity);
                history.push("/");
            }
            //login
            if (view === "login") {
                const user = await loginHandler({ email, password1 });
                console.log("user from login ", user);
                setUser({
                    id: user.id,
                    firstName: user.firstName,
                    isAdmin: user.isAdmin,
                    isUser: user.isUser,
                    token: user.token,
                });
                setCart(user.activeCart);
                setCartSize(user.activeCart.cartQuantity);
                history.push("/");
            }
            //guest
            if (view === "guest") {
                guestHandler({
                    firstName,
                    lastName,
                    email,
                    address1,
                    address2,
                    city,
                    state,
                    zipcode,
                    country,
                    phone,
                });
                history.push("/");
            }
            //edit and full edit
            if ((view === "edit" || view === "fulledit") && user.isUser) {
                const editObject = { firstName, lastName, email, password1, password2, addressLine1: address1, addressLine2: address2, city, state, zipcode, country, phone};
                if (password1 === '') {
                    delete editObject.password1;
                    delete editObject.password2;
                } 

                updateHandler(
                    editObject,
                    user.token
                );
                history.push("/");
            }
        } catch (error) {
            console.error(error);
        }

        resetForm();
        history.push("/");
    };

    function warning(warningMessage) {
        alert(warningMessage);
    }

    function resetForm() {
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword1("");
        setPassword2("");
        setAddress1("");
        setAddress2("");
        setCity("");
        setState("Alabama");
        setZipcode("");
        setCountry("United States");
        setPhone("");
    }

    //CURRENT VIEWS: login register guest userCheckout edit
    return (
        <div className="profile">
            <form className="profileForm" onSubmit={formHandler}>
                <h1
                    id="editPro"
                    className={
                        view === "register" || view === "login" || view === "userCheckout"
                            ? "field hide"
                            : "field"
                    }
                >
                    Edit Profile:{" "}
                </h1>
                <h1
                    id="editPro"
                    className={
                        view === "register" || view === "fulledit" || view === "userCheckout" || view === 'edit' || view === 'fulledit'
                            ? "field hide"
                            : "field"
                    }
                >
                    User Login:{" "}
                </h1>
                <h1
                    id="editPro2"
                    className={
                        view === "login" || view === "fulledit" || view === "userCheckout" || view === 'edit' || view === 'fulledit'
                            ? "field hide"
                            : "field"
                    }
                >
                    Sign Up:{" "}
                </h1>
                <input
                    type="text"
                    id="firstName"
                    placeholder="First Name"
                    value={firstName}
                    className={view === "login" ? "field hide" : "field"}
                    onChange={(event) => setFirstName(event.target.value)}
                    onKeyDown={(event) =>
                        event.target.value === "return" || event.target.value === "enter"
                            ? formHandler
                            : ""
                    }
                />
                <input
                    type="text"
                    id="lastName"
                    value={lastName}
                    placeholder="Last Name"
                    className={view === "login" ? "field hide" : "field"}
                    onChange={(event) => setLastName(event.target.value)}
                    onKeyDown={(event) =>
                        event.target.value === "return" || event.target.value === "enter"
                            ? formHandler
                            : ""
                    }
                />

                <input
                    type="text"
                    id="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    onKeyDown={(event) =>
                        event.target.value === "return" || event.target.value === "enter"
                            ? formHandler
                            : ""
                    }
                />
                <button
                    id="reveal"
                    className={
                        view === "register" ||
                        view === "userCheckout" ||
                        view === "login" ||
                        view === "guest" ||
                        view === "fulledit"
                            ? "field hide"
                            : "field"
                    }
                    onClick={passwordButtonHandler}
                >
                    Change Password
                </button>
                <input
                    type="password"
                    id="password1"
                    value={password1}
                    placeholder="Password"
                    className={
                        view === "guest" || view === "userCheckout" || view === "edit"
                            ? "field hide"
                            : "field"
                    }
                    onChange={(event) => setPassword1(event.target.value)}
                    onKeyDown={(event) =>
                        event.target.value === "return" || event.target.value === "enter"
                            ? formHandler
                            : ""
                    }
                />
                <input
                    type="password"
                    id="password2"
                    value={password2}
                    placeholder="Verify Password" //
                    className={
                        view === "guest" ||
                        view === "userCheckout" ||
                        view === "login" ||
                        view === "edit"
                            ? "field hide"
                            : "field"
                    }
                    onChange={(event) => setPassword2(event.target.value)}
                    onKeyDown={(event) =>
                        event.target.value === "return" || event.target.value === "enter"
                            ? formHandler
                            : ""
                    }
                />
                <input
                    type="text"
                    id="addressOne"
                    value={address1}
                    placeholder="Address Line One"
                    className={
                        view === "register" || view === "login" || view === "userCheckout"
                            ? "field hide"
                            : "field"
                    }
                    onChange={(event) => setAddress1(event.target.value)}
                    onKeyDown={(event) =>
                        event.target.value === "return" || event.target.value === "enter"
                            ? formHandler
                            : ""
                    }
                />
                <input
                    type="text"
                    id="addressTwo"
                    value={address2}
                    placeholder="Address Line Two"
                    className={
                        view === "register" || view === "login" || view === "userCheckout"
                            ? "field hide"
                            : "field"
                    }
                    onChange={(event) => setAddress2(event.target.value)}
                    onKeyDown={(event) =>
                        event.target.value === "return" || event.target.value === "enter"
                            ? formHandler
                            : ""
                    }
                />
                <input
                    type="text"
                    id="city"
                    value={city}
                    className={view === "register" || view === "login" ? "field hide" : "field"}
                    placeholder="City"
                    onChange={(event) => setCity(event.target.value)}
                    onKeyDown={(event) =>
                        event.target.value === "return" || event.target.value === "enter"
                            ? formHandler
                            : ""
                    }
                />
                <input
                    type="text"
                    id="zipCode"
                    value={zipcode}
                    className={view === "register" || view === "login" ? "field hide" : "field"}
                    placeholder="Zip Code"
                    onChange={(event) => setZipcode(event.target.value)}
                    onKeyDown={(event) =>
                        event.target.value === "return" || event.target.value === "enter"
                            ? formHandler
                            : ""
                    }
                />
                <select
                    className={view === "login" || view === "register" ? "field hide" : "field"}
                    value={state}
                    onChange={(event) => setState(event.target.value)}
                >
                    {states.map((state, i) => {
                        return (
                            <option key={i} value="">
                                {state}
                            </option>
                        );
                    })}
                </select>
                <select
                    className={view === "register" || view === "login" ? "field hide" : "field"}
                    value={country}
                    onChange={(event) => setCountry(event.target.value)}
                >
                    {countries.map((country, i) => {
                        return (
                            <option key={i} value="">
                                {country}
                            </option>
                        );
                    })}
                </select>
                <input
                    type="text"
                    id="phoneNumber"
                    value={phone}
                    placeholder="Phone Number"
                    className={view === "register" || view === "login" ? "field hide" : "field"}
                    onChange={(event) => setPhone(event.target.value)}
                    onKeyDown={(event) =>
                        event.target.value === "return" || event.target.value === "enter"
                            ? formHandler
                            : ""
                    }
                />
                <input
                    type="number"
                    id="creditCard"
                    placeholder="Credit Card Number"
                    className={view === "register" || view === "login" ? "field hide" : "field"}
                    value={creditCard}
                    readOnly
                />

                <br></br>
                <button id="submit" type="submit">
                    Submit
                </button>
                <button id="cancel" onClick={cancelHandler}>
                    Cancel
                </button>
            </form>
        </div>
    );
};
