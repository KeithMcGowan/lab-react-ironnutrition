import React from 'react';
import './FoodBox.css';

class FoodBox extends React.Component {
  render() {
    console.log(this.props.food);
    return this.props.food.map((el) => {
      return (
        <div className="box">
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src={el.image} />
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{el.name}</strong> <br />
                  <small>{el.calories}</small>
                </p>
              </div>
            </div>
            <div className="media-right">
              <div className="field has-addons">
                <div className="control">
                  <input className="input" type="number" value={el.quantity} />
                </div>
                <div className="control">
                  <button className="button is-info">+</button>
                </div>
              </div>
            </div>
          </article>
        </div>
      );
    });
  }
}

export default FoodBox;
