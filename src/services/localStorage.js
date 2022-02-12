const itensCart = 'cartList';

if (!JSON.parse(localStorage.getItem(itensCart))) {
  localStorage.setItem(itensCart, JSON.stringify([]));
}
const readCart = () => JSON.parse(localStorage.getItem(itensCart));

const saveCart = (cart) => localStorage.setItem(itensCart, JSON.stringify(cart));

export const getCart = () => readCart();

export const addCart = (item) => {
  const cart = readCart();

  const verify = cart.some((element) => element.id === item.id);

  if (verify) {
    const newItensCart = (cart.filter((element) => element.id !== item.id));
    saveCart([...newItensCart, item]);
  } else if (item) {
    saveCart([...cart, item]);
  }
};

export const removeCart = (item) => {
  const cart = readCart();
  saveCart(cart.filter((cartItem) => cartItem.trackId !== item.trackId));
};
