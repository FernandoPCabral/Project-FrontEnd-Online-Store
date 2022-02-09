export async function getCategories() {
  const url = 'https://api.mercadolibre.com/sites/MLB/categories';
  const resp = await fetch(url);
  const { results } = await resp.json();
  const response = results.map(
    ({
      productId,
      productName,
    }),
  );
  return response;
}

export async function getProductsFromCategoryAndQuery(/* categoryId, query */) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
}
