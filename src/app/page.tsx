import FeaturedProductsContainer from "@/components/FeaturedProductsContainer";
import Slider from "@/components/Slider";
import Offer from "@/components/Offer";

export default function Home() {
  return (
    <main>
      <Slider />
      <FeaturedProductsContainer />
      <Offer />
    </main>
  );
}
