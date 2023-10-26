import Image from "next/image";
import Countdown from "./Countdown";

const Offer = () => {
  return (
    <div className="bg-black h-screen md:h-[70vh] flex flex-col md:flex-row md:justify-between md:bg-[url('/offerBg.png')]">
      {/* TEXT CONTAINER */}
      <div className="flex-1 flex flex-col justify-center items-center text-center gap-8 p-6">
        <h1 className="text-white text-5xl font-bold xl:text-6xl">
          Delicious Burger and French Fries
        </h1>
        <p className="text-white xl:text-xl">
          Satisfy your cravings with our delectably juicy burger, a
          mouthwatering masterpiece that delivers pure burger bliss in every
          bite.
        </p>
        <Countdown />
        <button className="bg-red-500 text-white rounded-md py-3 px-6">
          Order Now
        </button>
      </div>

      {/* IMAGE CONTAINER */}
      <div className="relative flex-1 w-full md:h-full">
        <Image src="/offerProduct.png" alt="" fill className="object-contain" />
      </div>
    </div>
  );
};

export default Offer;
