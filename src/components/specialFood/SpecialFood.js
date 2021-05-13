import React from 'react';
import './SpecialFood.css';

class SpecialFood extends React.Component {
  render() {
    const { name, calories, quantity } = this.props;
    return (
      <div className="food-chart">
        <p>
          {quantity} {name} = {calories} cal.
        </p>
      </div>
    );
  }
}

export default SpecialFood;
