import type { LayoutLoad } from "./$types";
import type { Locales } from "$i18n/i18n-types";
import { loadLocaleAsync } from "$i18n/i18n-util.async";
import LL, { setLocale } from "$i18n/i18n-svelte";
import { get } from "svelte/store";

export const load: LayoutLoad<{ locale: Locales }> = async ({
  data: { locale, homePage, categories },
}) => {
  await loadLocaleAsync(locale);
  setLocale(locale);
  const $LL = get(LL);

  return { locale, homePage, categories };
};
