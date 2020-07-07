import React from 'react';
import '../App.css';
import Follower from './Follower'

class FollowerCard extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return(
            <div className='follower-card'>
                {this.props.followers.map(follower => 
                    <Follower key={follower.id} details={follower}/>
                )}
            </div>
        )
    }
}

export default FollowerCard