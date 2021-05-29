import React, {Component} from 'react';
import { render } from 'react-dom';
import {BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import { NavLink } from 'react-router-dom';


import "./navbar.css";
  


const Navigation = () => (
    <nav className='navBar'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/meet'>Meet The Belles</NavLink>
        <NavLink to='/bookofthemonth'>Book Of The Month</NavLink>
        <NavLink to='/recommendation'>Get A Recommendation</NavLink>
        <NavLink to='/givearec'>Give A Recommendation</NavLink>
    </nav>
  );


export default Navigation