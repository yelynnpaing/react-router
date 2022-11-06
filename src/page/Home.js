import React, { useRef } from 'react';
import "./Page.css";
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const nav = useNavigate();
  const inputRef = useRef();

  const handleClick = () =>{
    nav ("/services", {state:{text:inputRef.current.value}})
  }

  return (
    <div className='container'>
      <div>
        <h1>Home</h1>
        <input type="text" ref={inputRef} />
        <button onClick={handleClick}>Go to Services and Transfer Data</button>
      </div>
    </div>
  )
}

export default Home