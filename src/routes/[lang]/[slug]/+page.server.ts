import { redirect } from "@sveltejs/kit";
import { STRAPI } from "$env/static/private";

export const load = async ({ locals: { locale }, params }) => {
  console.log(params.slug);

  const data = await fetch(
    `${STRAPI}/api/categories?locale=${locale}&filters[$or][0][slug]=${params.slug}&filters[$or][1][localizations][slug]=${params.slug}&populate[seo][populate][0]=metaTitle`
  );
  const category = await data.json();

  if (category.data[0].slug !== params.slug) {
    const url = `/${locale}/${category.data[0].slug}`;
    throw redirect(308, url);
  }

  const services = async () => {
    const data = await fetch(
      `${STRAPI}/api/services?locale=${locale}&filters[category][slug][$eq]=${category.data[0].slug}&populate=deep&pagination[start]=0&pagination[limit]=2`
    );
    const services = await data.json();
    return services;
  };

  const awaited = async () => {
    const data = await fetch(
      `${STRAPI}/api/services?locale=${locale}&filters[category][slug][$eq]=${category.data[0].slug}&populate=deep&pagination[start]=2&pagination[limit]=100`
    );
    const services = await data.json();
    return services;
  };

  return {
    category: category.data[0],
    services: services(),
    awaited: {
      services: awaited(),
    },
  };
};
