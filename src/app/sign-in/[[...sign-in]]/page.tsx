import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <div className="relative h-full w-full">
      <div className="absolute right-5 top-10 z-[9999] md:top-24">
        <SignIn path="/sign-in" />
      </div>
      <Image
        src="/bg-taxi.jpg"
        alt="Ride Ease"
        width={1920}
        height={1080}
        className="absolute h-full w-full"
      />
    </div>
  );
}
