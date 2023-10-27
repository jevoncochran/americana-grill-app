import Image from "next/image";
import { SINGLE_PRODUCT } from "@/data";
import PriceContainer from "@/components/PriceContainer";

const SingleProductPage = () => {
  return (
    <div className="p-4 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex md:flex-row flex-col md:gap-8 justify-around md:justify-center md:items-center text-red-500">
      {/* IMAGE CONTAINER */}
      {SINGLE_PRODUCT.img && (
        <div className="relative w-full h-1/2 md:h-[70%]">
          <Image
            src={SINGLE_PRODUCT.img}
            alt=""
            fill
            className="object-contain"
          />
        </div>
      )}

      {/* TEXT CONTAINER */}
      <div className="h-1/2 md:h-[70%] flex flex-col md:justify-center gap-4 md:gap-6 xl:gap-8">
        <h1 className="text-3xl xl:text-5xl font-bold uppercase">
          {SINGLE_PRODUCT.title}
        </h1>
        <p>{SINGLE_PRODUCT.desc}</p>
        <PriceContainer product={SINGLE_PRODUCT} />
      </div>
    </div>
  );
};

export default SingleProductPage;
