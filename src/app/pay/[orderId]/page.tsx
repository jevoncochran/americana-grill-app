"use client";

import CheckoutForm from "@/components/CheckoutForm";
import { API_URL } from "@/constants/constants";
import { Elements } from "@stripe/react-stripe-js";
import { StripeElementsOptions, loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";

type Params = {
  params: {
    orderId: string;
  };
};

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string
);

const PaymentPage = ({ params }: Params) => {
  const { orderId } = params;

  const [clientSecret, setClientSecret] = useState("");

  const options: StripeElementsOptions = {
    clientSecret,
    appearance: {
      theme: "stripe",
    },
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await fetch(`${API_URL}/create-intent/${orderId}`, {
          method: "POST",
        });
        const data = await res.json();
        setClientSecret(data.clientSecret);
      } catch (error) {
        console.log(error);
      }
    };

    makeRequest();
  }, [orderId]);

  return (
    <div>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
};

export default PaymentPage;
