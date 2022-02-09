import React from 'react';
import ProductList from '../components/ProductList';
import Header from '../components/Header';

class Home extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <ProductList />
      </main>
    );
  }
}

export default Home;
