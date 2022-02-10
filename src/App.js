import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/Cart" component={ Cart } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
