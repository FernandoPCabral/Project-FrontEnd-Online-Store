import React from 'react';

class ProductDetails extends React.Component {
  constructor() {
    super();

    this.state = {
      attributes: [],

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

  render() {
    const { title, price, thumbnail, attributes } = this.state;
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
      </div>
    );
  }
}

export default ProductDetails;
