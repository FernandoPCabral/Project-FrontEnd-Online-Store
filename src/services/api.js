export async function getCategories() {
  const url = 'https://api.mercadolibre.com/sites/MLB/categories';
  const resp = await fetch(url);
  const data = await resp.json();

  return data;
}

export async function getProductsFromCategoryAndQuery(query, categoryId) {
  const url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  const resp = await fetch(url);
  const data = await resp.json();

  return data;
}
