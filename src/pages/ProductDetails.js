import React from 'react';

class ProductDetails extends React.Component {
  constructor() {
    super();

    this.state = {
      attributes: [],
      email: '',
      star: '',
      comment: '',
    };
  }

  async componentDidMount() {
    const href = window.location.href.split('product/');
    const id = href[href.length - 1];
    const resp = await fetch(` https://api.mercadolibre.com/items/${id}`);
    const details = await resp.json();
    const { title, price, thumbnail, attributes } = details;
    this.setState({ title, price, thumbnail, attributes });
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  }

  handleClick = (event) => {
    event.preventDefault();
  }

  render() {
    const { title, price, thumbnail, attributes, email, comment } = this.state;
    return (
      <div>
        <p data-testid="product-detail-name">
          { title }
          -R$
          { price }
        </p>
        <img src={ thumbnail } alt={ title } />
        {attributes.map((attribute) => ((
          <p key={ attribute.value_id }>
            {attribute.name}
            :
            {attribute.value_name}
          </p>
        )))}
        <h3>Avaliações</h3>
        <form>
          <label htmlFor="email">
            email:
            <input
              data-testid="product-detail-email"
              id="email"
              type="email"
              name="email"
              value={ email }
              onChange={ this.handleChange }
            />
          </label>
          <div>
            Estrelas:
            <br />
            <label htmlFor="star1">
              1
              <input onChange={ this.handleChange } data-testid="1-rating" id="star1" type="radio" name="star" value="1" />
            </label>
            <label htmlFor="star2">
              2
              <input onChange={ this.handleChange } data-testid="2-rating" id="star2" type="radio" name="star" value="2" />
            </label>
            <label htmlFor="star3">
              3
              <input onChange={ this.handleChange } data-testid="3-rating" id="star3" type="radio" name="star" value="3" />
            </label>
            <label htmlFor="star4">
              4
              <input onChange={ this.handleChange } data-testid="4-rating" id="star4" type="radio" name="star" value="4" />
            </label>
            <label htmlFor="star5">
              5
              <input onChange={ this.handleChange } data-testid="5-rating" id="star5" type="radio" name="star" value="5" />
            </label>
          </div>
          <label htmlFor="comment">
            <textarea
              id="comment"
              data-testid="product-detail-evaluation"
              name="comment"
              value={ comment }
              onChange={ this.handleChange }
            />
          </label>
          <button
            data-testid="submit-review-btn"
            type="submit"
            onClick={ this.handleClick }
          >
            Enviar
          </button>
        </form>
      </div>
    );
  }
}

export default ProductDetails;
