"use client";
import { paymentMethods, PaymentType } from "@/constants";
import { PaymentContext } from "@/context/PaymentContext";
import Image from "next/image";
import { useContext, useState } from "react";

export default function Cards() {
  const [paymentMethod, setPaymentMethod] = useState<number>();
  const { setPaymentIntent } = useContext(PaymentContext);
  return (
    <div className="rounded-xl border-[2px] p-2 md:p-5 md:pt-4">
      <h2 className="text-[14px] font-bold">Payment Methods</h2>
      <div className="mt-2 grid grid-cols-7">
        {paymentMethods.map((method, index) => (
          <div
            key={method.name}
            className={`flex w-1/2 cursor-pointer items-center justify-center rounded-md border-2 transition-all hover:scale-110 hover:border-black ${paymentMethod === index ? "border-black" : null}`.trim()}
            onClick={() => {
              setPaymentMethod(index);
              setPaymentIntent(method.paymentType as PaymentType);
            }}
          >
            <Image
              src={method.image}
              alt={method.name}
              height={30}
              width={50}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
