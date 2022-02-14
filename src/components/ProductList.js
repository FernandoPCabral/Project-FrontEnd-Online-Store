import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductList extends React.Component {
  render() {
    const { title, thumbnail, price, name, idProduct, shipping } = this.props;
    return (
      <div>
        <div data-testid={ name }>
          <p>{ title }</p>
          <Link
            data-testid="product-detail-link"
            to={ `product/${idProduct}` }
          >
            <img src={ thumbnail } alt={ title } />
          </Link>
          {shipping && <p data-testid="free-shipping">Frete Gratis</p> }
          <p>{ price }</p>
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
  shipping: PropTypes.string.isRequired,

};

export default ProductList;
