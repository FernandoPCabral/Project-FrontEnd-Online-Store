import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductList extends React.Component {
  render() {
    const { title, thumbnail, price, name, idProduct, itemQuantity } = this.props;
    return (
      <div>
        <div data-testid={ name }>
          <Link
            data-testid="product-detail-link"
            to={ `product/${idProduct}` }
          >
            <img src={ thumbnail } alt={ title } />
          </Link>
          <p data-testid="shopping-cart-product-name">{ title }</p>
          <p>{ price }</p>
          <p data-testid="shopping-cart-product-quantity">{ itemQuantity }</p>
        </div>
      </div>
    );
  }
}

ProductList.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  idProduct: PropTypes.string.isRequired,
  itemQuantity: PropTypes.number.isRequired,
};

export default ProductList;
