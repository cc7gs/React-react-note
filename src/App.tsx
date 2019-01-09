import React, { Component } from 'react';
import {view as Todo} from './todos'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Todo></Todo>
      </div>
    );
  }
}

export default App;
