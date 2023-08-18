import type { Gallery, Promos } from "../../types/types.js";
import nodemailer from "nodemailer";
import { SECRET_MAIL_USER } from "$env/static/private";
import { SECRET_MAIL_PASS } from "$env/static/private";

import { STRAPI } from "$env/static/private";

export const load = async ({ locals: { locale } }) => {
  const gallery = async () => {
    const data = await fetch(`${STRAPI}/api/gallery?populate[0]=images`);
    const gallery = await data.json();
    return gallery.data as Gallery;
  };

  const promos = async () => {
    const data = await fetch(
      `${STRAPI}/api/promos?locale=${locale}&populate=deep`
    );
    const promos = await data.json();
    return promos.data as Promos[];
  };

  return {
    promos: promos(),
    gallery: gallery(),
  };
};

export const actions = {
  mail: async ({ request }) => {
    const data = await request.formData();
    const name = data.get("name");
    const surname = data.get("surname");
    const email = data.get("email");
    const message = data.get("message");

    const transporter = nodemailer.createTransport({
      host: "printhere.eu",
      port: 465,
      // secure: true,
      tls: {
        rejectUnauthorized: false,
      },

      auth: {
        user: SECRET_MAIL_USER,
        pass: SECRET_MAIL_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: `${name}, ${surname} <${email}>`,
      to: "zane@attaprint.lv",
      subject: `jauna ziņa no Atta Print`,
      text: `${message}`,
    });

    return { success: true };
  },
};
