import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Redirect} from 'react-router-dom';
import Icon from './icon_gray.jpg';



class Homepage extends React.Component{
    render () {
        return (
            <div className='home'>
                <img src={Icon}/>
                <p>this is the homepage</p>
            </div>
           
        );
    }
}

export default Homepage