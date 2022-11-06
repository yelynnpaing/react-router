import React from 'react';
import Home from "./page/Home";
import About from "./page/About";
import Services from "./page/Services";
import Contact from "./page/Contact";
import Nav from './component/Nav';
import Error from './page/Error';
import Admin from './page/Admin';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



const App = () => {
  return (
    <div>
      <Router>
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/services' element={<Services/>}></Route>
          <Route path='/contact' element={<Contact/>} ></Route>
          <Route path= '/admin' element={<Admin/>}></Route>
          <Route path = "*" element={<Error/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App