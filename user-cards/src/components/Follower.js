import React from 'react';
import '../App.css';

class Follower extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        //avatar_url, url, login
        return(
            <div className='follower'>
                <img 
                    className='follow-avatar'
                    alt={`Follower Avatar ${this.props.details.id}`} 
                    src={this.props.details.avatar_url}
                />
                <h3>GitHub Handle: {this.props.details.login}</h3>
                <a href={this.props.details.html_url}>Link to GitHub</a>
            </div>
        )
    }
}

export default Follower