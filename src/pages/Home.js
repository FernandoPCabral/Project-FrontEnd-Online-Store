import React from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../services/api';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      listCategories: [],
    };
  }

  async componentDidMount() {
    const categories = await getCategories();
    this.setState({
      listCategories: categories,
    });
  }

  render() {
    const { listCategories } = this.state;
    return (
      <div>
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
        <input type="text" />
        <div>
          <Link
            data-testid="shopping-cart-button"
            to="/Cart"
          >
            Carrinho
            <input type="button" />
          </Link>
          <h3> Categorias </h3>
          { listCategories.map((category) => (
            <button type="button" data-testid="category" key={ category.id }>
              {category.name}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
