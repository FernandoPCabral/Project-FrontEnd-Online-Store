import React from 'react';
import { Link } from 'react-router-dom';
import { addCart } from '../services/localStorage';

class ProductDetails extends React.Component {
  constructor() {
    super();

    this.state = {
      attributes: [],
    };
  }

  async componentDidMount() {
    const href = window.location.href.split('product/');
    const id = href[href.length - 1];
    const resp = await fetch(`https://api.mercadolibre.com/items/${id}`);
    const details = await resp.json();
    const { title, price, thumbnail, attributes } = details;
    this.setState({ title, price, thumbnail, attributes, details });
  }

  addToCart = () => {
    const { details } = this.state;
    addCart(details);
    // console.log(details);
  }

  render() {
    const { title, price, thumbnail, attributes } = this.state;
    return (
      <div>
        <p data-testid="product-detail-name">
          { title }
          -R$
          { price }
        </p>
        <img src={ thumbnail } alt={ title } />
        <Link to="/Cart">
          <button
            type="button"
            data-testid="product-detail-add-to-cart"
            onClick={ this.addToCart }
          >
            Carrinho
          </button>
        </Link>
        {attributes.map((attribute) => ((
          <div key={ attribute.value_id }>
            <p>
              {attribute.name}
              :
              {attribute.value_name}
            </p>
          </div>
        )))}
      </div>
    );
  }
}

export default ProductDetails;
