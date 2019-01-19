import React, { Component } from 'react';
import '../css/App.css';

import ExampleContainer from "../containers/ExampleContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ExampleContainer/>
      </div>
    );
  }
}

export default App;
