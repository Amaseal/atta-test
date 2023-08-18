import { STRAPI } from "$env/static/private";

export const load = async ({ locals: { locale }, url }) => {
  const query = url.searchParams.get("query");

  const products = async () => {
    const data = await fetch(
      `${STRAPI}/api/products?locale=${locale}&filters[$or][0][title][$containsi]=${query}&filters[$or][1][slug][$containsi]=${query}&populate=deep`
    );
    const products = await data.json();
    return products.data;
  };

  return {
    products: products(),
  };
};
