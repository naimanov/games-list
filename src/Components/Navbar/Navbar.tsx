import React from 'react';
import Sort from './Sort';

function Navbar() {
  return (
    <header>
      <div className='title-container'>
        <h1 className='title'>Список игр</h1>
        <Sort />
      </div>
    </header>
  );
}

export default Navbar;
