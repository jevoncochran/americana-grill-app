import { getFeaturedMenu } from "@/serverFunctions/serverFunctions";
import FeaturedProduct from "./FeaturedProduct";

const FeaturedProductsContainer = async () => {
  const featuredProducts: any = await getFeaturedMenu();

  return (
    <div className="w-screen overflow-x-scroll text-red-500">
      {/* WRAPPER */}
      <div className="w-max flex">
        {featuredProducts.map((product: any) => (
          <FeaturedProduct key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProductsContainer;
