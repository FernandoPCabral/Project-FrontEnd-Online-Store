export async function getCategories() {
  const url = 'https://api.mercadolibre.com/sites/MLB/categories';
  const resp = await fetch(url);
  const data = await resp.json();
  return data;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;
  const resp = await fetch(url);
  const data = await resp.json();

  const url2 = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  const resp2 = await fetch(url2);
  const data2 = await resp2.json();
  return data || data2;
}
