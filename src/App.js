import React, { Component, useState } from 'react';
import './App.css';

function App() {
  //const [value, setValue] = useState('')
  const [show, setShow] = useState(false)

  const handleOnChange = (e) => {
  if (e.target.checked) {
    console.log('checked')
    setShow(true)
    // setValue(value => value = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')
  }
  else {
    setShow(false)
  }
}
    return (
      <div className="wrapper">
        <label><input type="checkbox" onChange={handleOnChange}/> Mostrar información importante</label>
        {show ? <p>'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'</p>:''} 
      </div>
    );
}

export default App;
