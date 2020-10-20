import React from 'react';
import './App.css';
import images from './assets/images';

function App() {
  return (
    <>
      <div>Avatar Selector</div>
      <div>
        <div className="spin"></div>
        <img className="avatar-photo list selecting" src={images['avatar1.png']} alt="Avatar1Image" />
      </div>

    </>
  );
}

export default App;
