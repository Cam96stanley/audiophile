import Image from "next/image";
import Link from "next/link";

export default function CategoryCard() {
  return (
    <div className="relative flex flex-col items-center bg-ligt-gray rounded-lg pt-20 pb-6 w-full mt-10">
      <div className="absolute -top-0">
        <Image
          src={"/shared/mobile/image-xx99-mark-one-headphones.jpg"}
          alt="headphones"
          width={375}
          height={173}
          className="w-54 h-auto"
        />
      </div>
      <h3 className="font-extrabold uppercase text-[15px] tracking-widest">
        Headphones
      </h3>
      <Link
        href={"#"}
        className="mt-2 text-[13px] text-black opacity-50 font-medium uppercase tracking-wider flex items-center gap-2 hover:text-burnt-orange"
      >
        Shop <span className="text-burnt-orange">{">"}</span>
      </Link>
    </div>
  );
}
