import React, { Component } from 'react';
import { view as Todo } from './todos'
import { view as Filter } from './filter'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Todo></Todo>
        <Filter></Filter>
      </div>
    );
  }
}

export default App;
