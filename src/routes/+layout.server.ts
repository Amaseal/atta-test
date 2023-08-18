import type { Category, HomePage } from "../types/types";
import type { LayoutServerLoad } from "./$types";

import { STRAPI } from "$env/static/private";

export const load: LayoutServerLoad = async ({ locals: { locale } }) => {
  const homePage = async () => {
    const data = await fetch(
      `${STRAPI}/api/homepage?locale=${locale}&populate=deep,4`
    );
    const homePage = await data.json();
    return homePage.data as HomePage;
  };

  const categories = async () => {
    const data = await fetch(
      `${STRAPI}/api/categories?locale=${locale}&populate=deep`
    );
    const categories = await data.json();
    return categories.data as Category[];
  };

  return {
    locale,
    categories: categories(),
    homePage: homePage(),
  };
};
