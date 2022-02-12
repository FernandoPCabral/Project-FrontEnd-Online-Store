import React from 'react';
import PropTypes from 'prop-types';
import { getCart } from '../services/localStorage';
import ProductList from '../components/ProductList';
// import { Link } from 'react-router-dom';

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      carrinho: [],
      itemQuantity: 0,
    };
  }

  componentDidMount() {
    const { idProduct } = this.props;
    const carrinho = getCart();
    const produtos = carrinho.find((iten) => iten.id === idProduct);

    this.setState({
      carrinho: getCart(),
    });

    if (produtos) {
      this.setState({
        itemQuantity: produtos.itemQuantity - 1,
      });
    }
  }

  render() {
    const { carrinho } = this.state;
    const { itemQuantity } = this.props;
    return (
      <div>
        {carrinho.length < 1 ? <span>Seu carrinho está vazio</span>
          : (carrinho.map((iten) => (
            <div key={ iten.id }>
              <ProductList
                title={ iten.title }
                thumbnail={ iten.thumbnail }
                price={ iten.price }
                itemQuantity={ itemQuantity }
              />
            </div>
          )))}
      </div>
    );
  }
}

Cart.propTypes = {
  idProduct: PropTypes.number.isRequired,
  itemQuantity: PropTypes.number.isRequired,
};

export default Cart;
