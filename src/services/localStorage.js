const itensCart = 'cartList';

if (!JSON.parse(localStorage.getItem(itensCart))) {
  localStorage.setItem(itensCart, JSON.stringify([]));
  // localStorage.setItem(amount, JSON.stringify({

  // }));
}
const readCart = () => JSON.parse(localStorage.getItem(itensCart));

const saveCart = (cart) => localStorage.setItem(itensCart, JSON.stringify(cart));

export const getCart = () => readCart();

export const addCart = (item) => {
  const cart = readCart();
  // if (Object.keys(amount).includes(item.id)) {
  //   amount[item.id] = amount[item.id] + 1;
  // // }obj = {
  //   key: value
  // }

  const verify = cart.some((element) => element.id === item.id);

  if (verify) {
    cart.forEach((element) => {
      if (element.id === item.id) {
        element.cartQuantity += 1;
      }
    });
    saveCart(cart);
  } else {
    item.cartQuantity = 1;
    cart.push(item);
    saveCart(cart);
  }
};

export const removeCart = (item) => {
  const cart = readCart();
  saveCart(cart.filter((cartItem) => cartItem.trackId !== item.trackId));
};
