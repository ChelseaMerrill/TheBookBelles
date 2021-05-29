import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Redirect} from 'react-router-dom';
import Icon from './icon.jpg';
import BOTMI from './when_no_one_is_watching.jpg';

import './homepage.css';

class Homepage extends React.Component{
    render () {
        return (
            <div className='home'>
                <img src={Icon}/>
                <div className='bio'>
                    <h2>bio/blurb</h2>
                </div>
                <div className='bookOfTheMonth'>
                    <h1>June 2021</h1>
                    <img src={BOTMI} width='300px' height='410px'/>
                    <h3>Title: When No One Is Watching</h3>
                    <h4>Author: Alyssa Cole</h4>
                    <p>Sydney Green is Brooklyn born and raised, but her beloved neighborhood seems to change every time she blinks. Condos are sprouting like weeds, FOR SALE signs are popping up overnight, and the neighbors she’s known all her life are disappearing. To hold onto her community’s past and present, Sydney channels her frustration into a walking tour and finds an unlikely and unwanted assistant in one of the new arrivals to the block—her neighbor Theo. But Sydney and Theo’s deep dive into history quickly becomes a dizzying descent into paranoia and fear. Their neighbors may not have moved to the suburbs after all, and the push to revitalize the community may be more deadly than advertised. When does coincidence become conspiracy? Where do people go when gentrification pushes them out? Can Sydney and Theo trust each other—or themselves—long enough to find out before they too disappear?</p>
                </div>
                
            </div>
           
        );
    }
}

export default Homepage