"use client";

import { useEffect, useState } from "react";
import { Product } from "@/data";
import { Option } from "@/data";

interface PriceContainerProps {
  product: Product;
}

const PriceContainer = ({ product }: PriceContainerProps) => {
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
    if (!options) {
      return quantity * price;
    } else {
      return quantity * (price + options[selected as number].additionalPrice);
    }
  };

  useEffect(() => {
    setTotal(getTotalPrice(quantity, product.price, product.options, selected));
  }, [quantity, selected, product.options, product.price]);

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">{total.toFixed(2)}</h2>
      {/* OPTIONS CONTAINER */}
      <div className="flex gap-4">
        {product.options?.map((option, idx) => (
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
        <button className="w-56 uppercase bg-red-500 text-white p-3 ring-1 ring-red-500">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default PriceContainer;
