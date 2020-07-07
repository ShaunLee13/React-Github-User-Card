import React from 'react';
import '../App.css';

class Follower extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className='follower'>
                <p>I am a follower; details will go here when I have API requests again!</p>
            </div>
        )
    }
}

export default Follower