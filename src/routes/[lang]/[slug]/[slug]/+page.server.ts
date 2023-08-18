import { redirect } from "@sveltejs/kit";
import { STRAPI } from "$env/static/private";

export const load = async ({ locals: { locale }, params }) => {
  const service = async () => {
    const data = await fetch(
      `${STRAPI}/api/services?locale=${locale}&filters[$or][0][slug]=${params.slug}&filters[$or][1][localizations][slug]=${params.slug}&populate=deep`
    );
    const service = await data.json();

    if (service.data[0].slug !== params.slug) {
      const url = `/${locale}/${service.data[0].category.slug}/${service.data[0].slug}`;
      throw redirect(308, url);
    }
    return service.data[0];
  };

  return {
    service: service(),
  };
};
