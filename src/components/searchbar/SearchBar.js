import React from 'react';
import './SearchBar.css';
import 'bulma/css/bulma.css';

class SearchBar extends React.Component {
  search = (e) => {
    this.props.executeSearch(e.target.value);
  };

  render() {
    return (
      <div className="search">
        <input
          onChange={this.search}
          className="input"
          type="text"
          placeholder="Search for foods"
        />
      </div>
    );
  }
}

export default SearchBar;
