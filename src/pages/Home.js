import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import CategoriesList from '../components/CategoriesList';
import SearchComponent from '../components/SearchComponent';
import ProductList from '../components/ProductList';
import { getProductsFromCategoryAndQuery } from '../services/api';
import { addCart, getCart } from '../services/localStorage';

const stateStandart = {
  category: '',
  submitEnable: false,
};

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      ...stateStandart,
      products: [],
      arrCart: [],
      totalItens: 0,
    };
  }

  componentDidMount() {
    const cart = getCart();
    let totalItens = 0;
    cart.forEach((item) => { totalItens += item.cartQuantity; });
    this.setState({ totalItens });
  }

  // Função para a utiliação categorias
  handleCategorieChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => this.handleCategorie());
  }

  // Função para a utiliação categorias
  async handleCategorie() {
    const { category } = this.state;
    const response = await getProductsFromCategoryAndQuery(category);
    this.setState({
      products: response.results,
    });
    this.setState({
      category: '',
    });
  }

  // Função para a utiliação do input e botão submit
  handleInputChange = ({ target }) => {
    const { value } = target;
    this.setState(() => ({
      onInputChange: value,
    }));
  }

  // Função para a utiliação do input e botão submit
  handleButtonClick = async (event) => {
    event.preventDefault();
    const { onInputChange } = this.state;
    const response = await getProductsFromCategoryAndQuery(onInputChange);
    this.setState({
      products: response.results,
    });
    this.setState({
      onInputChange: '',
    });
  }

  render() {
    const { products, onInputChange, totalItens } = this.state;
    return (
      <div>
        <Header />
        <SearchComponent
          searchProductBtn={ this.handleButtonClick }
          onInputChange={ this.handleInputChange }
        />
        <div>
          <Link
            data-testid="shopping-cart-button"
            to="/Cart"
          >
            <button type="button">Carrinho</button>
          </Link>
          <span data-testid="shopping-cart-size">{totalItens}</span>
        </div>
        <CategoriesList onCategoryChange={ this.handleCategorieChange } />
        { products.length < 1 ? <p>Nenhum produto foi encontrado</p>
          : products.map((product) => (
            <div key={ product.id }>
              <ProductList
                name="product"
                title={ product.title }
                thumbnail={ product.thumbnail }
                price={ product.price }
                idProduct={ product.id }
                query={ onInputChange }
                shippingFree={ product.shipping.free_shipping }
              />
              <button
                data-testid="product-add-to-cart"
                type="button"
                id={ product.id }
                onClick={ () => {
                  const { arrCart } = this.state;
                  this.setState({
                    arrCart: [...arrCart, product],
                  });
                  addCart(product);
                  this.componentDidMount();
                } }
              >
                Adicionar ao Carrinho
              </button>
            </div>
          ))}
      </div>
    );
  }
}

export default Home;
