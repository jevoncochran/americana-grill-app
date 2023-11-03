import Image from "next/image";
import { Product } from "@/types/types";
import Link from "next/link";

interface FeaturedProductProps {
  product: Product;
}

const FeaturedProduct = ({ product }: FeaturedProductProps) => {
  return (
    <Link href={`/product/${product.id}`}>
      <div
        key={product.id}
        className="w-screen md:w-[50vw] xl:w-[33vw] h-[60vh] xl:h-[90vh] flex flex-col items-center justify-around p-4 hover:bg-fuchsia-50 transition-all duration-300"
      >
        {/* IMAGE CONTAINER */}
        {product.img && (
          <div className="relative flex-1 w-full hover:rotate-[60deg] transition-all duration-500">
            <Image src={product.img} alt="" fill className="object-contain" />
          </div>
        )}

        {/* TEXT CONTAINER */}
        <div className="flex-1 flex flex-col gap-4 items-center justify-center text-center">
          <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl">
            {product.title}
          </h1>
          <p className="p-4 2xl:p-8">{product.desc}</p>
          <span className="text-xl font-bold">{`$${Number(
            product.price
          ).toFixed(2)}`}</span>
        </div>
      </div>
    </Link>
  );
};

export default FeaturedProduct;
