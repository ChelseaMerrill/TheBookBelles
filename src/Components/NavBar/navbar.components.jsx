import React, {Component} from 'react';
import { render } from 'react-dom';
import {BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import { NavLink } from 'react-router-dom';


import "./navbar.css";
  


const Navigation = () => (
    <nav>
      <ul>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/meet'>Meet The Belles</NavLink></li>
        <li><NavLink to='/bookofthemonth'>Book Of The Month</NavLink></li>
        <li><NavLink to='/recommendation'>Get A Recommendation</NavLink></li>
        <li><NavLink to='/givearec'>Give A Recommendation</NavLink></li>
      </ul>
    </nav>
  );


export default Navigation