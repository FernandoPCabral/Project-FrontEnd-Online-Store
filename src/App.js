import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';
import Checkout from './pages/Checkout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/Cart" component={ Cart } />
          <Route path="/product/:id" component={ ProductDetails } />
          <Route path="/checkout" component={ Checkout } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
