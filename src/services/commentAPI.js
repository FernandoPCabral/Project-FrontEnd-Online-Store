const getAllComment = (productId) => JSON.parse(localStorage.getItem(productId));

const setComment = (productId, newComment) => {
  const arr = getAllComment(productId) || [];
  arr.push(newComment);
  localStorage.setItem(productId, JSON.stringify(arr));
};

export { setComment, getAllComment };
