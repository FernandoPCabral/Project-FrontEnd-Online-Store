export const addToCart = (Item) => {
  localStorage.setItem('cartList', JSON.stringify(Item));
};

const readCart = () => {
  localStorage.getItem(JSON.parse('cardList'));
};

export const getCart = () => readCart();
