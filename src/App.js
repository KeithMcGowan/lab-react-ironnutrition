import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/foodBox/FoodBox';

class App extends React.Component {
  state = { food: foods.slice() };

  render() {
    return (
      <div className="App">
        <h1>IronNutrition</h1>
        <FoodBox food={this.state.food} />
      </div>
    );
  }
}

export default App;
