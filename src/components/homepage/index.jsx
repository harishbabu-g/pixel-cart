"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { A11y, Autoplay, Pagination } from "swiper/modules";

const Homepage = ({ widgetList }) => {
  console.log(widgetList,"widgetList");
  return (
    <main className="mx-auto max-w-360 px-4">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
        className="h-[600]"
        modules={[Pagination, A11y, Autoplay]}
        navigation
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <img src="/img/banner1.jpg" alt="banner1" className="h-full w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/banner2.jpg" alt="banner2" className="h-full w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/banner3.jpg" alt="banner3" className="h-full w-full" />
        </SwiperSlide>
      </Swiper>

      <section className="mt-12">
        {/* Section Header */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-800">
            Featured Products
          </h2>
          <button className="text-sm font-medium text-blue-600 hover:underline">
            View all
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="group rounded-lg border bg-white p-3 transition hover:shadow-md"
            >
              {/* Image */}
              <div className="relative mb-3 h-40 overflow-hidden rounded-md bg-gray-100">
                <img
                  src={`/img/product-${i + 1}.jpg`}
                  alt="product"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Product Info */}
              <h3 className="line-clamp-2 text-sm font-medium text-gray-800">
                Wireless Headphones with Noise Cancellation
              </h3>

              {/* Rating */}
              <div className="mt-1 flex items-center text-xs text-yellow-500">
                ★★★★☆ <span className="ml-1 text-gray-500">(120)</span>
              </div>

              {/* Price */}
              <div className="mt-2 flex items-center gap-2">
                <span className="text-base font-semibold text-gray-900">
                  ₹2,499
                </span>
                <span className="text-sm text-gray-400 line-through">
                  ₹3,499
                </span>
              </div>

              {/* CTA */}
              <button className="mt-3 w-full rounded-md bg-gray-900 py-2 text-sm text-white transition hover:bg-gray-800">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Homepage;
