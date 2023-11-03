"use client";
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useCartStore } from "@/zustand/store";

const SuccessPage = () => {
  const searchParams = useSearchParams();
  const paymentIntent = searchParams.get("payment_intent");
  const router = useRouter();

  const { emptyCart } = useCartStore();

  useEffect(() => {
    const makeRequest = async () => {
      try {
        await fetch(`/api/confirm/${paymentIntent}`, { method: "PUT" });
        emptyCart();
        // TODO: Delay the reroute a bit to give user time to read success message
        router.push("/orders");
      } catch (error) {
        console.log(error);
      }
    };

    makeRequest();
  }, [paymentIntent, router, emptyCart]);

  return (
    <div className="min-h-[calc(100vh-6rem)] md:min-h-[calc(100vh-15rem)] flex items-center justify-center text-center text-2xl text-green-700">
      <p className="max-w-[600px]">
        Payment successful. You are being redirected to the orders page. Please
        do not close this page.
      </p>
    </div>
  );
};

export default SuccessPage;
