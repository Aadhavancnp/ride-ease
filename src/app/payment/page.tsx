"use client";
import { SelectedCarAmountContext } from "@/context/SelectedCarAmountContext";
import {
  Appearance,
  loadStripe,
  StripeElementsOptions,
} from "@stripe/stripe-js";
import { useContext, useEffect, useState } from "react";

import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "@/components/payment/CheckOutForm";
import "./payment.css";
import { useSearchParams } from "next/navigation";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!,
);

export default function Page() {
  const [clientSecret, setClientSecret] = useState("");
  const searchParams = useSearchParams();
  const selectedCarAmount = searchParams.get("amount");
  const paymentType = searchParams.get("payment_type");
  useEffect(() => {
    fetchPaymentIntent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function fetchPaymentIntent() {
    const res = await fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: selectedCarAmount, paymentType }),
    });
    const data = await res.json();
    setClientSecret(data.clientSecret);
  }

  const appearance: Appearance = {
    theme: "stripe",
  };
  const options: StripeElementsOptions = {
    clientSecret,
    appearance,
  };

  return (
    <>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </>
  );
}
