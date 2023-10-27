import Image from "next/image";

const CartPage = () => {
  return (
    <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-red-500 lg:flex-row">
      {/* PRODUCTS CONTAINER */}
      {/* TODO: Overflow-scrol is not working as expcted */}
      {/* When there are 4 or more items in the cart, the one at the top gets cut off */}
      <div className="h-1/2 lg:h-full lg:w-2/3 p-4 lg:px-20 flex flex-col justify-center overflow-scroll">
        {/* SINGLE ITEM */}
        <div className="flex items-center justify-between mb-4">
          <Image src="/temporary/p1.png" alt="" width={100} height={100} />
          <div>
            <h1 className="uppercase text-xl font-bold">Sicilian</h1>
            <span>Large</span>
          </div>
          <h2 className="font-bold">$79.90</h2>
          <span className="cursor-pointer">X</span>
        </div>

        <div className="flex items-center justify-between mb-4">
          <Image src="/temporary/p1.png" alt="" width={100} height={100} />
          <div>
            <h1 className="uppercase text-xl font-bold">Sicilian</h1>
            <span>Large</span>
          </div>
          <h2 className="font-bold">$79.90</h2>
          <span className="cursor-pointer">X</span>
        </div>

        <div className="flex items-center justify-between mb-4">
          <Image src="/temporary/p1.png" alt="" width={100} height={100} />
          <div>
            <h1 className="uppercase text-xl font-bold">Sicilian</h1>
            <span>Large</span>
          </div>
          <h2 className="font-bold">$79.90</h2>
          <span className="cursor-pointer">X</span>
        </div>

        {/* <div className="flex items-center justify-between mb-4">
          <Image src="/temporary/p1.png" alt="" width={100} height={100} />
          <div>
            <h1 className="uppercase text-xl font-bold">Sicilian</h1>
            <span>Large</span>
          </div>
          <h2 className="font-bold">$79.90</h2>
          <span className="cursor-pointer">X</span>
        </div> */}
      </div>

      {/* PAYMENT CONTAINER */}
      <div className="h-1/2 lg:h-full lg:w-1/3 p-4 lg:px-20 bg-fuchsia-50 flex flex-col gap-4 lg:gap-6 justify-center lg:text-xl">
        <div className="flex justify-between">
          <span>Subtotal (3 items)</span>
          <span>$81.70</span>
        </div>
        <div className="flex justify-between">
          <span>Service Fee</span>
          <span>$2.70</span>
        </div>
        <div className="flex justify-between">
          <span>Delivery</span>
          <span className="text-green-500">FREE</span>
        </div>
        <hr />
        <div className="flex justify-between my-2">
          <span>Total (taxes included)</span>
          <span className="font-bold">$83.90</span>
        </div>
        <button className="bg-red-500 text-white p-3 rounded-md w-1/2 self-end">
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default CartPage;
