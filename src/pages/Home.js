import React from 'react';
import ProductList from '../components/ProductList';
import Header from '../components/Header';
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
    console.log(listCategories);
    return (
      <div>
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
        <input type="text" />
        <div>
          <h3> Categorias </h3>
          { listCategories.map((categorie) => (
            <button type="button" data-testid="category" key={ categorie.id }>
              {categorie.name}
            </button>
          ))}
        </div>
        <Header />
        <ProductList />
      </div>
    );
  }
}

export default Home;
