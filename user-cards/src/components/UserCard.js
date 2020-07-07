import React from 'react';
import '../App.css';

class UserCard extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log(this.props.user.login)
        return(
            <div className='user-card'>
                <div className='user hook'>
                    <img alt='User Avatar' src={this.props.user.avatar_url}/>

                    <h2 id='name'>
                        Name: {this.props.user.name}
                    </h2>

                    <h3 id='handle'>
                        GitHub Handle: {this.props.user.login}
                    </h3>
                </div>
                <div className='user about'>
                    <p id='bio'>
                        Bio: {this.props.user.bio}
                    </p>

                    <p id='location'>
                        This User is from: {this.props.user.location}
                    </p>

                    <p id='followers'>
                        Followed by: {this.props.user.followers} Users  
                    </p>

                    <p id='following'>
                        Is Following: {this.props.user.following} Users
                    </p>
                </div>
            </div>
        )
    }
}

export default UserCard