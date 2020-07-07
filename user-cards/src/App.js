import React from 'react';
import './App.css';
import axios from 'axios'
import UserCard from './components/UserCard';
import FollowerCard from './components/FollowerCard';

class App extends React.Component {
  state = {
    user: {},
    currentUser: 'ShaunLee13',
    followers: []
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/ShaunLee13`)
      .then(res => {
        //res.data
        this.setState({user: res.data})
      })
    axios.get(`https://api.github.com/users/${this.state.currentUser}/followers`)
    .then(res => {
      //res.data
      this.setState({followers: res.data})
    })
  }


  render() {
    if(this.state.user === {}) {
      return <p>Having difficulties loading! Thank you for your patience</p>
    }
    return (
      <div className="App">
        <h1>GitHub User Cards</h1>
        <UserCard 
        user={this.state.user}/>
        <FollowerCard 
        followers={this.state.followers}/>
      </div>
    );
  }
}

export default App;
