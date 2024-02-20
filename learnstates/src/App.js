
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    person: {
      fullName: "Med Amine",
      bio: <h1>i am the king </h1>,
      imgSrc: "https://wallpapers.com/images/featured/black-king-cw9lba8brx3wvpzs.jpg",
      profession: "devolleper,student,grocer"
    },
    show: false,
    timeElapsed: 0
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ timeElapsed: this.state.timeElapsed + 1 });
    }, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.toggleShow}>Toggle Profile</button>
        {this.state.show && (
          <div>
            <h2>{this.state.person.fullName}</h2>
            <p>{this.state.person.bio}</p>
            <img src={this.state.person.imgSrc} alt={this.state.person.fullName} />
            <p>{this.state.person.profession}</p>
          </div>
        )}
        <p>Time since mount: {this.state.timeElapsed} seconds</p>
      </div>
    );
  }
}

export default App;