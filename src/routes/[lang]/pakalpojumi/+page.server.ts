import type { Category, HomePage } from "../../../types/types";
import { STRAPI } from "$env/static/private";
import { redirect } from "@sveltejs/kit";

export const load = async ({ locals: { locale } }) => {
  if (locale === "en") {
    throw redirect(308, "/en/services");
  }
  const categories = async () => {
    const data = await fetch(
      `${STRAPI}/api/categories?locale=${locale}&populate=deep`
    );
    const categories = await data.json();
    console.log(categories);
    return categories.data as Category[];
  };

  return {
    categories: categories(),
  };
};
