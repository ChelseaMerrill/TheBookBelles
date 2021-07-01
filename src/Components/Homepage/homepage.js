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
                <h1>The Book Belles</h1>
                <div className='bio'>
                    <h2>The Book Belles book club was created in the midst of the COVID pandemic when two friends decided to take their love of literature and use it to bridge the distance between friends. Each month we explore new authors, genres, and time periods to diversify the experience and discover something new. What began as a childhood dream of two girls in Upsate, New York has rapidly expanded to encompass women in different states and, hopefully, eventually globally.  We meet virtually on the last Sunday of the month to share thoughts, explore plot lines, and celebrate friendship. We are always welcoming new members who want to be a part of our little community. We hope that you join us! </h2>
                </div>
                     <h1>What We Are Reading</h1>
                     <h1>June 2021</h1>
                 <div className='bookOfTheMonth'>
                    <div className='content'>
                        <img src={BOTMI} width='300px' height='410px'/>
                        <h2>Title: When No One Is Watching</h2>
                        <h3>Author: Alyssa Cole</h3>
                    </div>
                    <div className='summary'>
                        <p>Sydney Green is Brooklyn born and raised, but her beloved neighborhood seems to change every time she blinks. Condos are sprouting like weeds, FOR SALE signs are popping up overnight, and the neighbors she’s known all her life are disappearing. To hold onto her community’s past and present, Sydney channels her frustration into a walking tour and finds an unlikely and unwanted assistant in one of the new arrivals to the block—her neighbor Theo. But Sydney and Theo’s deep dive into history quickly becomes a dizzying descent into paranoia and fear. Their neighbors may not have moved to the suburbs after all, and the push to revitalize the community may be more deadly than advertised. When does coincidence become conspiracy? Where do people go when gentrification pushes them out? Can Sydney and Theo trust each other—or themselves—long enough to find out before they too disappear?</p>
                    </div>
                </div>
                <div className='end'>
                    <h1>Meetings are held virtually the last Sunday of the month at 2 pm EST.  Email Chelsea at: chelmer1223@aol.com to join! </h1>
                </div>
            </div>
           
        );
    }
}

export default Homepage