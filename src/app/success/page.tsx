"use client";
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const SuccessPage = () => {
  const searchParams = useSearchParams();
  const paymentIntent = searchParams.get("payment_intent");
  const router = useRouter();

  useEffect(() => {
    const makeRequest = async () => {
      try {
        await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/confirm/${paymentIntent}`,
          { method: "PUT" }
        );

        router.push("/orders");
      } catch (error) {
        console.log(error);
      }
    };

    makeRequest();
  }, [paymentIntent, router]);

  return (
    <div>
      Payment successful. You are being redirected to the orders page. Please do
      not close the page.
    </div>
  );
};

export default SuccessPage;
