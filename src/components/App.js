import React, { useState, useEffect } from 'react';

import { Header, MainBody, Categories } from './index'

import {
  getSomething
} from '../api';

const App = () => {
  

  // useEffect(() => {
  //   getSomething()
  //     .then(response => {
  //       setMessage(response.message);
  //     })
  //     .catch(error => {
  //       setMessage(error.message);
  //     });
  // });

  return (
    <div className="App">
      <Header />
      <MainBody />
      <Categories />
    </div>
  );
}

export default App;