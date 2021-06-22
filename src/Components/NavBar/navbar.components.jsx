import React, {Component} from 'react';
import {BrowserRouter as Link} from "react-router-dom";



import "./navbar.css";
  


const Navigation = () => (
    <nav className='navBar'>
        <Link to='/'>Home</Link>
        <Link to='/meet'>Meet The Belles</Link>
        <Link to='/bookofthemonth'>Book Of The Month</Link>
        <Link to='/recommendation'>And The Category Is</Link>
        <Link to='/'>The Burn Book</Link>
        <Link to='/givearec'>Join Us</Link>
    </nav>
  );


export default Navigation