// pages/product-details/[id].tsx
import {
  productsData,
  SliderData,
} from "@/app/_home/ProductsSlider/sliderData";
import Image from "next/image";
import Link from "next/link";

import { notFound } from "next/navigation";

type Props = {
  params: {
    id: string;
  };
};

export default function ProductDetails({ params }: Props) {
  const product: SliderData | undefined = productsData.find(
    (p) => p.id.toString() === params.id
  );

  if (!product) return notFound();

  return (
    <section className="px-6 md:px-20 py-10 flex flex-col md:flex-row items-center gap-10">
      {/* Image */}
      <div className="relative w-full md:w-1/2 h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg">
        <Image
          src={product.url}
          alt={product.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Details */}
      <div className="md:w-1/2 space-y-4">
        <h1 className="text-4xl font-bold ">{product.title}</h1>
        <p className="">{product.description}</p>
        <p className="text-2xl font-semibold text-green-600 dark:text-green-400">
          ${product.price || "29.99"}
        </p>
        <Link
          href={`https://wa.me/1234567890?text=I'm interested in ${product.title}`}
          target="_blank"
          className="inline-block mt-4 px-6 py-3 rounded-full bg-green-500 text-white font-semibold shadow-md hover:bg-green-600 transition-all"
        >
          Ticket on WhatsApp
        </Link>
      </div>
    </section>
  );
}
