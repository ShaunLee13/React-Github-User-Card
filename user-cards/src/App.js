import React from 'react';
import './App.css';
import axios from 'axios'

class App extends React.Component {
  state = {
    user: {},
    currentUser: 'ShaunLee13'
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/${this.state.currentUser}`)
      .then(res => {
        //res.data
        this.setState({user: res.data})
        console.log(this.state.user)
      })
  }

  render() {
    if(this.state.user === {}) {
      return <p>Having difficulties loading! Thank you for your patience</p>
    }
    return (
      <div className="App">
        <h1>Hello</h1>
      </div>
    );
  }
}

export default App;
