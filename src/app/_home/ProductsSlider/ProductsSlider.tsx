"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow } from "swiper/modules";
import Image from "next/image";
import { productsData } from "./sliderData";
import Link from "next/link";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const ProductsSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="px-4 md:px-10 w-full mt-10">
      <div className="py-6 my-4 border-b border-gray-300 dark:border-gray-700">
        <h2 className="text-lg md:text-4xl font-semibold white">
          Grab the best deal on T-Shirts
        </h2>
      </div>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        spaceBetween={40}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: false,
        }}
        loop
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper h-[350px] w-full"
      >
        {productsData.map((image, index) => (
          <SwiperSlide key={image.id} className="w-[260px]">
            <Link
              href={`/productDetails/${image.id}`}
              className={`block h-full transition-all duration-300 ${
                index === activeIndex ? "scale-100" : "scale-90 opacity-80"
              } bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700`}
            >
              <div className="relative w-full h-1/2 rounded-t-2xl overflow-hidden">
                <Image
                  src={image.url}
                  alt={`slider-item-${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h5 className="mb-1 text-xl font-semibold text-gray-900 dark:text-white">
                  {image.title || "Noteworthy Tech 2021"}
                </h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {image.description ||
                    "Biggest enterprise tech acquisitions of 2021."}
                </p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .swiper-pagination-bullet {
          background: #d1d5db;
          opacity: 1;
          transition: all 0.3s ease;
          width: 10px;
          height: 10px;
          border-radius: 9999px;
          margin: 0 4px !important;
        }
        .swiper-pagination-bullet-active {
          background: #1f2937;
          width: 16px;
        }
        :root.dark .swiper-pagination-bullet {
          background: #4b5563;
        }
        :root.dark .swiper-pagination-bullet-active {
          background: #f9fafb;
        }
      `}</style>
    </section>
  );
};

export default ProductsSlider;
