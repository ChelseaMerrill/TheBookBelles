import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Redirect} from 'react-router-dom';



class Homepage extends React.Component{
    render () {
        return (
            <div className='home'>
                <p>this is the homepage</p>
            </div>
           
        );
    }
}

export default Homepage