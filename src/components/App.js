import React, { Component } from 'react';
import Navigation from './Navigation';
import LoginFormContainer from './LoginFormContainer';
import RegisterFormContainer from './RegisterFormContainer';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <LoginFormContainer />
        {/* <RegisterFormContainer /> */}
      </div>
    );
  }
}

export default App;
