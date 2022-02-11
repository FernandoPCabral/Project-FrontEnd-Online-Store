import React from 'react';
import getCart from '../services/localStorage';
// import ProductList from '../components/ProductList';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  componentDidMount() {
    const storage = getCart();
    console.log(storage);
  }

  render() {
    return (
      <div />
    );
  }
}

export default Cart;
