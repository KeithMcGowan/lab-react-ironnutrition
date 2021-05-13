import React from 'react';
import FoodBox from '../foodBox/FoodBox';
import NewFoods from '../newFoods/NewFoods';
import SearchBar from '../searchbar/SearchBar';
import SpecialFood from '../specialFood/SpecialFood';
import data from '../../foods.json';
import './Main.css';

class Main extends React.Component {
  state = {
    allFoods: data,
    visibleFoods: data,
    showForm: false,
    todaysFoods: [],
  };

  createNewFood = (newFood, e) => {
    e.preventDefault();
    // console.log(e.target);
    const copy = [...this.state.allFoods];
    copy.unshift({ newFood });
    this.setState({ allFoods: copy, visibleFoods: copy, showForm: false });
  };

  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm });
  };

  filteredResults = (searchTerm) => {
    const copy = [...this.state.allFoods];
    const filteredResults = copy.filter((food) => {
      return food.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    this.setState({ visibleFoods: filteredResults });
  };

  addToList = (food) => {
    const copy = this.state.todaysFoods;
    let duplicate = false;

    copy.forEach((eachFood) => {
      if (eachFood.name === food.name) {
        eachFood.quantity += 1;
        eachFood.calories += food.calories;
        duplicate = true;
      }
    });
    if (!duplicate) {
      copy.push(food);
    }
    this.setState({ todaysFoods: copy });
  };

  render() {
    console.log(data);

    return (
      <div className="main">
        <SearchBar executeSearch={this.filteredResults} />
        <button onClick={this.toggleForm}>
          <b>Add Food</b>
        </button>
        {this.state.showForm && <NewFoods create={this.createNewFood} />}
        <div className="foods">
          <div className="foodbox">
            {this.state.visibleFoods.map((food) => {
              return (
                <FoodBox {...food} key={food.name} addToList={this.addToList} />
              );
            })}
          </div>
          <div className="special-food">
            {this.state.todaysFoods.map((food) => {
              return <SpecialFood {...food} key={food.name} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
