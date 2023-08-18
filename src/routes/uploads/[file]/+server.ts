import { STRAPI } from "$env/static/private";

export async function GET({ params }) {
  const data = await fetch(`${STRAPI}/uploads/${params.file}`);
  const image = await data.blob();
  return new Response(image, {
    headers: { "cache-control": `max-age=${60 * 60 * 24 * 120}` },
  });
}
