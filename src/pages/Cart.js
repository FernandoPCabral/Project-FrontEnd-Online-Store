import React from 'react';
import { Link } from 'react-router-dom';
import { getCart } from '../services/localStorage';
import ProductList from '../components/ProductList';

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      cart: [],
    };
  }

  componentDidMount() {
    this.setState({
      cart: getCart(),
    });
  }

  render() {
    const { cart } = this.state;
    return (
      <div>
        <Link
          data-testid="shopping-cart-button"
          to="/"
        >
          <button type="button">Carrinho</button>
        </Link>
        {cart.length < 1 ? (
          <p data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </p>)
          : (cart.map((iten) => (
            <div key={ iten.id }>
              <ProductList
                title={ iten.title }
                thumbnail={ iten.thumbnail }
                price={ iten.price }
                itemQuantity={ iten.cartQuantity }
              />
            </div>
          )))}
      </div>
    );
  }
}

export default Cart;
