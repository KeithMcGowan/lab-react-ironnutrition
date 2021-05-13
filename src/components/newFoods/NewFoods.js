import React from 'react';
import './NewFoods.css';

class NewFoods extends React.Component {
  state = {
    name: '',
    calories: 0,
    image: '',
  };

  handleChange = (e) => {
    // console.log(e.target);
    this.setState({ [e.target.name]: e.target.value });
  };

  handleForm = (e) => {
    this.setState({
      name: '',
      calories: 0,
      image: '',
    });
    this.props.create(this.state, e);
  };

  render() {
    return (
      <div>
        <form className="new-food-form" onSubmit={this.handleForm}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            placeholder="Name of food"
            onChange={this.handleChange}
          />

          <label>Calories:</label>
          <input
            type="number"
            name="calories"
            value={this.state.calories}
            placeholder="Number of calories"
            onChange={this.handleChange}
          />

          <label>Image URL:</label>
          <input
            type="text"
            name="image"
            value={this.state.image}
            placeholder="Insert image url here"
            onChange={this.handleChange}
          />

          <button><b>Submit</b></button>
        </form>
      </div>
    );
  }
}

export default NewFoods;
