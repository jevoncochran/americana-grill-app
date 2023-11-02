import prisma from "@/utils/connect";

export const getMenuCategories = async () => {
  const categories = await prisma.category.findMany();
  return categories;
};

export const getMenuByCategory = async (category: string) => {
  const products = await prisma.product.findMany({
    where: { catSlug: category },
  });
  return products;
};

export const getFeaturedMenu = async () => {
  const products = await prisma.product.findMany({
    where: { isFeatured: true },
  });
  return products;
};

export const getProductById = async (id: string) => {
  const product = await prisma.product.findUnique({ where: { id } });
  return product;
};
