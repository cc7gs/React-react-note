import React, { Component } from 'react';
import { view as Todo } from './todos'
import { view as Filter } from './filter'
import { view as Weather } from './weather'
import SelectCity from './weather/selectCity'
class App extends Component {
  render() {

    return (
      <div className="App">
        <Todo></Todo>
        <Filter></Filter>
        <SelectCity></SelectCity>
        <Weather></Weather>
      </div>
    );
  }
}

export default App;
