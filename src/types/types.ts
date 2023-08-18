import { type } from "os";

export type Category = {
  id: number;
  title: string;
  slug: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  lacale: string;
  image: Image;
  services: Service[];
};

export type Service = {
  id: number;
  title: string;
  slug: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  lacale: string;
  image: Image;
  category: Category;
  products: Product[];
};

export type Product = {
  id: number;
  title: string;
  slug: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  lacale: string;
  image: Image;
  service: Service;
  prices: Price[];
  colors: Color[];
};

export type Price = {
  id: number;
  quantity: number;
  price: number;
};

export type Image = {
  id: number;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: {
    large: ImageFormat | null;
    medium: ImageFormat | null;
    small: ImageFormat | null;
    thumbnail: ImageFormat | null;
  };
  url: string;
};

export type ImageFormat = {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | null;
  width: number;
  height: number;
  size: number;
  url: string;
};

export type SE0 = {
  id: number;
  metTitle: string;
  metaDescription: string;
  keywords: string | null;
  metaRobots: string | null;
  structuredData: string | null;
  metaViewport: string | null;
  canonicalURL: string | null;
  metaImage: Image;

  metaSocial: string[];
};

export type HomePage = {
  id: number;
  title: string;
  span: string;
  image: Image;
  contact_title: string;
  description: string;
  gallery_title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  contacts: Contact[];
  seo: Seo;
};

export type Contact = {
  id: number;
  title: string;
  single_contact: SingleContact[];
};

export type SingleContact = {
  id: number;
  text: string;
  icon: Image;
};

export type Gallery = {
  images: Image[];
};

export type Promos = {
  id: number;
  button: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  text: string;
  image: Image;
  service: Service;
};

export type Seo = {
  metaTitle: string;
  metaDescription: string;
};

export type Color = {
  id: number;
  name: string;
  color: string;
  updatedAt: string;
  publishedAt: string;
};
