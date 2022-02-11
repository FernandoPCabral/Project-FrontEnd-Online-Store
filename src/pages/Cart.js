import React from 'react';
// import PropTypes from 'prop-types';
import { getCart } from '../services/localStorage';
// import ProductList from '../components/ProductList';
// import { Link } from 'react-router-dom';

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  componentDidMount() {
    console.log(getCart());
  }

  render() {
    return (
      <div>
        ola
      </div>
    );
  }
}

export default Cart;
