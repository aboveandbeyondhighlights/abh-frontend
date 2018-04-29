import React, { Component } from 'react';
import Navigation from './Navigation';
import WrappedLoginForm from './LoginForm';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <WrappedLoginForm />
      </div>
    );
  }
}

export default App;
