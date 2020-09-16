import React, { useState, useEffect } from 'react';

import {
  getSomething
} from '../api';

const App = () => {
  

  useEffect(() => {
    getSomething()
      .then(response => {
        setMessage(response.message);
      })
      .catch(error => {
        setMessage(error.message);
      });
  });

  return (
    <div className="App">
      <Header />
      <MainBody />
      <Categories />
    </div>
  );
}

export default App;