import React from 'react';

class Checkout extends React.Component {
  render() {
    return (
      <div>
        <h1>Finalizar compra</h1>
        <form>
          <label htmlFor="name">
            Nome completo
            <input id="name" type="text" data-testid="checkout-fullname" />
          </label>
          <br />
          <label htmlFor="email">
            Email
            <input id="email" type="email" data-testid="checkout-email" />
          </label>
          <br />
          <label htmlFor="cpf">
            CPF
            <input id="cpf" type="text" data-testid="checkout-cpf" />
          </label>
          <br />
          <label htmlFor="phone">
            Telefone
            <input id="phone" type="text" data-testid="checkout-phone" />
          </label>
          <br />
          <label htmlFor="cep">
            CEP
            <input id="cep" type="text" data-testid="checkout-cep" />
          </label>
          <br />
          <label htmlFor="address">
            Endereço:
            <input id="address" type="text" data-testid="checkout-address" />
          </label>
        </form>
      </div>
    );
  }
}

export default Checkout;
