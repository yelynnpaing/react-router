import React from 'react'
import "./Page.css";
import { useParams } from 'react-router-dom'; 

const Contact = () => {
  const {name} = useParams();
  console.log(name);
  return (
    <div className='container'>{name}</div>
  )
}

export default Contact