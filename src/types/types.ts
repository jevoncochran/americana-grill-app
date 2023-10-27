export type Menu = {
  id: number;
  slug: string;
  title: string;
  desc?: string;
  img?: string;
  color: string;
}[];

export type Option = { title: string; additionalPrice: number };

export type Product = {
  id: number;
  title: string;
  desc?: string;
  img?: string;
  price: number;
  options?: Option[];
};
