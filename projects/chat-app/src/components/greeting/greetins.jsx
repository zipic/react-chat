import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import './style.scss';

export const Greeting = () => {
  const [user, setUser] = useState('');
  const [inputClear, setInputClear] = useState(true);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setUser(value);
    
    if (value.trim() === '') {
      setInputClear(true);
    } else {
      setInputClear(false);
    }
  };

  return (
    <div className="chat">
    <img className="logo" src="./icons/user-3296.svg" alt="login" />
      <div className="chat__border">
        <div>
        <input 
          className="chat__input"
          type="text" 
          placeholder="Enter your name"
          value={user}
          onChange={handleInputChange}
        />
        </div>
        <Link 
          className={`chat__button ${inputClear ? 'disabled' : ''}`} 
          to={`/chat/${user}`}
        >
          Log in
        </Link>
      </div>
    </div>
  );
};

export default Greeting;