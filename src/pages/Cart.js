import React from 'react';
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
        {cart.length < 1 ? <span>Seu carrinho está vazio</span>
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
