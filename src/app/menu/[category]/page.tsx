import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/types";
import { getMenuByCategory } from "@/serverFunctions/serverFunctions";

interface CategoryPageProps {
  params: { category: string };
}

const CategoryPage = async ({ params }: CategoryPageProps) => {
  const products: any = await getMenuByCategory(params.category);

  return (
    <div className="flex flex-wrap text-red-500">
      {products.map((item: Product) => (
        <Link
          key={item.id}
          href={`/product/${item.id}`}
          className="w-full sm:w-1/2 lg:w-1/3 h-[60vh] border-r-2 border-b-2 border-red-500 even:bg-fuchsia-50 p-4 flex flex-col justify-between"
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
            <h2 className="text-xl">
              {/* TODO: If I do not convert to number, the app breaks  */}
              {/* However, item.price is already a number. Why? */}$
              {Number(item.price).toFixed(2)}
            </h2>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryPage;
