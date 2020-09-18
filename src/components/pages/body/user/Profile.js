/** @format */

import React from "react";

import "./Profile.css";


export const Profile = () => {
    return (
        <div className="profile">
            <p>Profile</p>
            <form className="profileForm">
  <input type="text" id="firstName" placeholder="First Name" value={} onChange={}>
  <input type="text" id="lastName" placeholder="Last Name" value={} onChange={}>
  <input type="text" id="email" placeholder="Email Address" value={} onChange={}>
  <input type="text" id="password" placeholder="Password" value={} onChange={}>
  <input type="text" id="password" placeholder="Password" value={} onChange={}>
  <input type="text" id="addressOne" placeholder="Address" value={} onChange={}>
  <input type="text" id="addressTwo" placeholder="Address" value={} onChange={}>
  <input type="text" id="city" placeholder="City" value={} onChange={}>
  <input type="text" id="zipCode" placeholder="Zip Code" value={} onChange={}>
  <select className="stateDropdown"><option value="">select a State</option></select>
  <select className="countryDropdown"><option value="">select a Country</option></select>
  <input type="text" id="phoneNumber" placeholder="Phone Number" value={} onChange={}>
</form>
        </div>
    );
};
