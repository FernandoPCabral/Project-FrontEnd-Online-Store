import React from 'react';
import { Link } from 'react-router-dom';
import { getCart, saveCart } from '../services/localStorage';
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

  componentWillUnmount() {
    const { cart } = this.state;
    saveCart(cart);
  }

  remove = ({ target: { id } }) => {
    // const { cart } = this.state;
    // this.setState({
    //   cart: cart.filter((Item) => Item.id !== id),
    // }, () => { saveCart(cart); });

    this.setState((prev) => ({
      cart: prev.cart.filter((Item) => Item.id !== id),
    }));
  }

  plusOne = ({ target: { id } }) => {
    const { cart } = this.state;
    cart.forEach((item) => {
      if (item.id === id && item.cartQuantity < item.available_quantity) {
        item.cartQuantity += 1;
      }
    });
    this.setState({
      cart,
    });
  }

  lessOne = (event) => {
    const { id } = event.target;
    const { cart } = this.state;
    cart.forEach((item) => {
      if (item.id === id) {
        if (item.cartQuantity === 1) {
          this.remove(event);
        } else {
          item.cartQuantity -= 1;
          this.setState({
            cart,
          });
        }
      }
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
              <button
                id={ iten.id }
                type="button"
                onClick={ this.remove }
              >
                x
              </button>
              <button
                id={ iten.id }
                type="button"
                data-testid="product-increase-quantity"
                onClick={ this.plusOne }
              >
                +
              </button>
              <button
                id={ iten.id }
                type="button"
                data-testid="product-decrease-quantity"
                onClick={ this.lessOne }
              >
                -
              </button>
              <br />
            </div>
          )))}
        <Link to="/checkout" data-testid="checkout-products">checkout</Link>
      </div>
    );
  }
}

export default Cart;
