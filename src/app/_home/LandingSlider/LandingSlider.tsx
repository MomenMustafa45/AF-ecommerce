"use client";

import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

// import { db } from "../../../services/firebase";
// import { collection, getDocs } from "firebase/firestore";
import image1 from "../../../../public/main-slider-one.jpg";
import image2 from "../../../../public/main-slider-two.jpg";
import image3 from "../../../../public/main-slider-three.jpg";

type ImageItem = { title: string; id: string; url: string | StaticImageData };

const LandingSlider = () => {
  const [images] = useState<ImageItem[]>([
    { title: "image one", id: "1", url: image1 },
    { title: "image two", id: "2", url: image2 },
    { title: "image three", id: "3", url: image3 },
  ]);

  // useEffect(() => {
  //   const fetchImages = async () => {
  //     const querySnapshot = await getDocs(collection(db, "MainSliderImages"));

  //     const imageUrls: ImageItem[] = [];
  //     querySnapshot.forEach((doc) => {
  //       const data = doc.data();
  //       if (data?.url) {
  //         imageUrls.push({
  //           id: doc.id,
  //           title: data.title || "Untitled",
  //           url: data.url,
  //         });
  //       }
  //     });
  //     setImages([...images]); // Now storing the images as an array of objects
  //   };

  //   fetchImages();
  // }, []);

  return (
    <section className="px-4 w-full mt-10">
      <Swiper
        spaceBetween={30}
        effect="fade"
        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop
        modules={[EffectFade, Pagination, Autoplay]}
        className="mySwiper aspect-[1400/600]"
      >
        {images.map((image, index) => (
          <SwiperSlide key={image.id} className="w-full h-full">
            <Image
              alt={`slider-item-${index + 1}`}
              src={image.url} // Use the image URL here
              layout="fill"
              objectFit="cover"
              className="object-fill"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination Styles */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: #d1d5db; /* gray-300 */
          opacity: 1;
          transition: all 0.3s ease;
          width: 10px;
          height: 10px;
          border-radius: 9999px;
          margin: 0 4px !important;
        }
        .swiper-pagination-bullet-active {
          background: #1f2937; /* gray-800 */
          width: 16px;
        }
        :root.dark .swiper-pagination-bullet {
          background: #4b5563; /* gray-600 */
        }
        :root.dark .swiper-pagination-bullet-active {
          background: #f9fafb; /* gray-100 */
        }
      `}</style>
    </section>
  );
};

export default LandingSlider;
