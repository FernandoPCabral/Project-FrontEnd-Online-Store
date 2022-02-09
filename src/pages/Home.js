import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
        <input type="text" />
      </div>
    );
  }
}

export default Home;
