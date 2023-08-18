import { redirect } from "@sveltejs/kit";
import type { Gallery } from "../../../types/types.js";
import { STRAPI } from "$env/static/private";
import type { Locales } from "$i18n/i18n-types";

export const load = async ({ locals: { locale } }) => {
  if (locale === "lv") {
    throw redirect(308, "/lv/galerija");
  }

  const gallery = async () => {
    const data = await fetch(`${STRAPI}/api/gallery?populate[0]=images`);
    const gallery = await data.json();
    return gallery.data as Gallery;
  };
  return {
    gallery: gallery(),
  };
};
