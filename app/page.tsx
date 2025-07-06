import Link from "next/link";
import CategoryCard from "@/components/CategoryCard";

export default function Home() {
  return (
    <>
      <main className="bg-[url(/home/mobile/image-header.jpg)] bg-cover bg-[center_top_-90px] w-full">
        <div className="flex flex-col items-center text-center">
          <p className="text-white uppercase text-[14px] tracking-[10px] opacity-50 mt-27">
            New Product
          </p>
          <p className="uppercase text-white font-bold text-[36px] tracking-wide mt-4">
            XX99 Mark II Headphones
          </p>
          <p className="text-white opacity-75 text-[15px] mt-6 max-w-82 tracking-wider font-light">
            Experience natural, life like audio and exceptional build quality
            made for the passionate music enthusiasts.
          </p>
          <Link href={"#"} className="block">
            <div className="uppercase bg-burnt-orange mt-7 mb-28">
              <span className="text-white font-medium text-[13px] tracking-wider px-4 py-4 inline-block">
                See prouduct
              </span>
            </div>
          </Link>
        </div>
      </main>
      <section>
        <CategoryCard />
      </section>
    </>
  );
}
