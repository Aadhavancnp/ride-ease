import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import taxiIcon from "@/assets/images/taxi.png";
import packageIcon from "@/assets/images/box.png";

export default function Header() {
  const headerMenu = [
    { name: "Ride", icon: taxiIcon },
    { name: "Package", icon: packageIcon },
  ];
  return (
    <div className="flex items-center justify-between border-b-[4px] border-gray-200 p-2 pb-1 pl-10 pr-5">
      <div className="flex items-center gap-24">
        <Image src="/logo.png" width={70} height={70} alt="Logo" />
        <div className="flex items-center gap-6">
          {headerMenu.map((menu, id) => (
            <div key={id} className="flex items-center gap-2">
              <Image src={menu.icon} width={17} height={17} alt={menu.name} />
              <h2 className="text-[14px] font-medium">{menu.name}</h2>
            </div>
          ))}
        </div>
      </div>
      <UserButton />
    </div>
  );
}
