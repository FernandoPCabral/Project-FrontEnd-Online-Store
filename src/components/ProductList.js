import React from 'react';
import PropTypes from 'prop-types';
import { getProductsFromCategoryAndQuery } from '../services/api';

class ProductList extends React.Component {
  constructor() {
    super();
    this.state = {
      results: [],
    };
  }

  async componentDidMount() {
    const { query, category } = this.props;
    const response = await getProductsFromCategoryAndQuery(category, query);
    console.log(response);
    this.setState({
      results: response.results,
    });
  }

  render() {
    const { results } = this.state;
    return (
      <div>
        <input
          type="text"
          data-testid="query-input"
          value={ query }
        />
        <input
          type="button"
          data-testid="query-button"
          value="Search"
          onClick={ searchProducts }
        />
        {
          results.map((products) => (
            <div key={ products.key }>
              <p value={ products.title } />
              <img src={ products.img } alt={ products.title } />
              <p value={ products.price } />
            </div>
          ))
        }
      </div>
    );
  }
}

ProductList.propTypes = {
  query: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default ProductList;
