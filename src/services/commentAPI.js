const newComment = {
  email: 'higor@hotmail.com',
  star: '5',
  comment: 'Muito bom! Compraria novamente',
}

const setComment = (productId /*, newComment*/) => {
  localStorage.setItem(productId, newComment);
}