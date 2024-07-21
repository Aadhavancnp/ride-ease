import { SignUp } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <div className="relative h-full w-full">
      <div className="absolute left-5 top-10 z-[9999] md:top-24">
        <SignUp path="/sign-up" />
      </div>
      <Image
        src="/bg-taxi1.jpg"
        alt="Ride Ease"
        width={1920}
        height={1080}
        className="absolute h-full w-full"
      />
    </div>
  );
}
