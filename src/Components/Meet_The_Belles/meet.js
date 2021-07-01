import React, {Component} from 'react';
import CourtneyImage from './Courtney.jpg';

import './meet.css';

class MeetTheBelles extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            Members: [
                {
                    id: 1,
                    name: 'Courtney',
                    bio: 'My name is Courtney. I very much enjoy being a part of Book Belles. A little about me:  I have a soulmate named Alex and we just bought a lovely house. For work, I am a medical coder. My hobbies beside reading include photography, playing video games, spending time with my loved ones, and enjoying poetry. One of my poems will actually be published in Volume 2 of Poetic Lie Sense, a magazine stemming from the Facebook group.',
                    pic: CourtneyImage
                },
            ]}
        }
    render () {
        return (
            <div className='meetPage'>
                <h1>Founders</h1>
                <div className='row'>
                    <div className='Chelsea'>

                    </div>
                    <div className='Alyssa'>

                    </div>
                </div>
                <h1>Members</h1>
                <div>
                    {this.state.Members.map((member) => (
                        <div key={member.id} className='row'>
                            <img src={member.pic}/>
                            <h1>{member.name}</h1>
                            <p>{member.bio}</p>
                        </div>
                    ))}
                </div>
                
            </div>  
        );
    }
}

export default MeetTheBelles