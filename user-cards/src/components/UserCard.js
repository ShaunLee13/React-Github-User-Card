import React from 'react';
import './App.css';

class UserCard extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className='user-card'>
                <div className='user'>
                    <img />
                    <h2></h2>
                </div>
                <div></div>
            </div>
        )
    }
}

export default UserCard