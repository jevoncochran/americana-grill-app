import { Prisma } from "@prisma/client";

export type Menu = {
  id: string;
  slug: string;
  title: string;
  desc?: string;
  img?: string;
  color: string;
}[];

export type Option = { title: string; additionalPrice: number };

export type Product = {
  id: string;
  title: string;
  desc?: string;
  img: string | null;
  price: Prisma.Decimal;
  catSlug: string;
  options?: Option[];
};

export type Order = {
  id: string;
  userEmail: string;
  price: number;
  products: CartItem[];
  status: string;
  createdAt: Date;
  intent_id?: string;
};

export type CartItem = {
  id: string;
  title: string;
  img?: string;
  price: number;
  option?: string;
  quantity: number;
};

export type Cart = {
  products: CartItem[];
  totalItems: number;
  totalPrice: number;
};

export type Actions = {
  addToCart: (item: CartItem) => void;
  removeFromCart: (item: CartItem) => void;
};
