import React from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../services/api';

class CategoriesList extends React.Component {
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
    const {
      onCategoryChange,
    } = this.props;
    const { listCategories } = this.state;
    // console.log(listCategories);
    return (
      <div>
        <h3> Categorias </h3>
        { listCategories.map((categorie) => (
          <label htmlFor="category" key={ categorie.id }>
            <input
              type="radio"
              name="category"
              value={ categorie.name }
              data-testid="category"
              onClick={ onCategoryChange }
            />
            {categorie.name}
          </label>
        ))}
      </div>
    );
  }
}

CategoriesList.propTypes = {
  onCategoryChange: PropTypes.func.isRequired,
};

export default CategoriesList;
