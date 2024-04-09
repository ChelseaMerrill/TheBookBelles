import React from 'react';


import './homepage.css';

class Homepage extends React.Component{
    render () {
        return (
            <div className='home'>
                <h1>The Book Belles</h1>
                <div className='bio'>
                    <h2>The Book Belles book club was created in the midst of the COVID pandemic when two friends decided to take their love of literature and use it to bridge the distance between friends. Each month we explore new authors, genres, and time periods to diversify the experience and discover something new. What began as a childhood dream of two girls in Upsate, New York has rapidly expanded to encompass women in different states and, hopefully, eventually globally.  We meet virtually on the last Sunday of the month to share thoughts, explore plot lines, and celebrate friendship. We are always welcoming new members who want to be a part of our little community. We hope that you join us! </h2>
                </div>
            </div>
           
        );
    }
}

export default Homepage