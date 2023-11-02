"use client";

import { useEffect, useState } from "react";
import { Product, Option } from "@/types/types";
import { useCartStore } from "@/zustand/store";
import { toast } from "react-toastify";

interface PriceContainerProps {
  product: any;
}

const PriceContainer = ({ product }: PriceContainerProps) => {
  const { addToCart } = useCartStore();

  const [total, setTotal] = useState(product.price);
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(0);

  // TODO: Write unit tests for this function
  const getTotalPrice = (
    quantity: number,
    price: number,
    options?: Option[],
    selected?: number
  ) => {
    if (!options || !options?.length) {
      return quantity * Number(price);
    } else {
      return quantity * (Number(price) + options[selected!].additionalPrice);
    }
  };

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      title: product.title,
      img: product.img,
      price: total,
      // TODO: I do not fully understand this
      ...(product.options?.length && {
        option: product.options[selected].title,
      }),
      quantity: quantity,
    });
    toast.success("Product succesfully added to your cart");
  };

  useEffect(() => {
    setTotal(getTotalPrice(quantity, product.price, product.options, selected));
  }, [quantity, selected, product.options, product.price]);

  useEffect(() => {
    useCartStore.persist.rehydrate();
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">{Number(total).toFixed(2)}</h2>
      {/* OPTIONS CONTAINER */}
      <div className="flex gap-4">
        {product.options?.map((option: any, idx: number) => (
          <button
            key={idx}
            className="w-24 p-2 ring-1 ring-red-400 rounded-md"
            style={{
              background: selected === idx ? "rgb(248 113 113)" : "white",
              color: selected === idx ? "white" : "red",
            }}
            onClick={() => setSelected(idx)}
          >
            {option.title}
          </button>
        ))}
      </div>

      {/* QUANTITY CONTAINER */}
      <div className="flex items-center">
        <div className="flex w-full justify-between p-3 ring-1 ring-red-500">
          <span>Quantity</span>
          <div className="flex items-center gap-4">
            <button
              className="px-2 text-white font-bold bg-red-500"
              onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              className="px-2 text-white font-bold bg-red-500"
              onClick={() => setQuantity((prev) => (prev < 10 ? prev + 1 : 10))}
            >
              +
            </button>
          </div>
        </div>

        {/* CART BUTTON */}
        <button
          className="w-56 uppercase bg-red-500 text-white p-3 ring-1 ring-red-500"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default PriceContainer;
