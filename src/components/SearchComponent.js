import React from 'react';
import PropTypes from 'prop-types';

class SearchComponent extends React.Component {
  render() {
    const {
      searchProductBtn,
      onInputChange,
    } = this.props;

    return (
      <div>
        <label htmlFor="inputSearch">
          <input
            name="inputSearch"
            type="text"
            data-testid="query-input"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="Search">
          <input
            type="button"
            name="Search"
            data-testid="query-button"
            value="Search"
            onClick={ searchProductBtn }
          />
        </label>
      </div>
    );
  }
}

SearchComponent.propTypes = {
  searchProductBtn: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default SearchComponent;
