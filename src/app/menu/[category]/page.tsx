import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/types";

interface CategoryPageProps {
  params: { category: string };
}

const getData = async (category: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products?category=${category}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Unable to retrieve products");
  }

  return res.json();
};

const CategoryPage = async ({ params }: CategoryPageProps) => {
  const products: Product[] = await getData(params.category);

  return (
    <div className="flex flex-wrap text-red-500">
      {products.map((item) => (
        <Link
          key={item.id}
          href={`/product/${item.id}`}
          className="w-full sm:w-1/2 lg:w-1/3 h-[60vh] border-r-2 border-b-2 border-red-500 even:bg-fuchsia-50 p-4 flex flex-col justify-between group"
        >
          {/* IMAGE CONTAINER */}
          {item.img && (
            <div className="relative h-[80%]">
              <Image src={item.img} alt="" fill className="object-contain" />
            </div>
          )}

          {/* TEXT CONTAINER */}
          <div className="flex items-center justify-between font-bold">
            <h1 className="text-2xl uppercase p-2">{item.title}</h1>
            <h2 className="group-hover:hidden text-xl">
              {/* TODO: If I do not convert to number, the app breaks  */}
              {/* However, item.price is already a number. Why? */}
              {Number(item.price).toFixed(2)}
            </h2>
            <button className="hidden group-hover:block uppercase bg-red-500 text-white p-2 rounded-md">
              Add to cart
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryPage;
