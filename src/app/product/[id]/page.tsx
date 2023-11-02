import Image from "next/image";
import PriceContainer from "@/components/PriceContainer";
import DeleteBtn from "@/components/DeleteBtn";
import { getProductById } from "@/serverFunctions/serverFunctions";

const SingleProductPage = async ({ params }: { params: { id: string } }) => {
  const product = await getProductById(params.id);

  return product ? (
    <div className="p-4 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex md:flex-row flex-col md:gap-8 justify-around md:justify-center md:items-center text-red-500 relative">
      {/* IMAGE CONTAINER */}
      {product?.img && (
        <div className="relative w-full h-1/2 md:h-[70%]">
          <Image src={product.img} alt="" fill className="object-contain" />
        </div>
      )}

      {/* TEXT CONTAINER */}
      <div className="h-1/2 md:h-[70%] flex flex-col md:justify-center gap-4 md:gap-6 xl:gap-8">
        <h1 className="text-3xl xl:text-5xl font-bold uppercase">
          {product?.title}
        </h1>
        <p>{product?.desc}</p>
        <PriceContainer product={product} />
      </div>

      <DeleteBtn productId={product.id} />
    </div>
  ) : null;
};

export default SingleProductPage;
