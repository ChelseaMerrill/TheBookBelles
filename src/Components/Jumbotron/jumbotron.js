import React, {Component} from 'react';
import Tansparent from './icon.jpg';

import './jumbotron.css';

class Jumbotron extends React.Component{
    render () {
        return (
            <div className='backgroundimage' style={{ backgroundImage: "url(/jumbopic.jpg)" }}>
                <img src={Tansparent} height='300px'/>
            </div>
        );
    }}

export default Jumbotron