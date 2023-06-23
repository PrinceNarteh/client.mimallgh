import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

export const Banner = () => {
  return (
    <div className="relative mx-auto grid h-48 md:h-96 w-full md:w-10/12 lg:w-9/12 grid-cols-8 gap-3 overflow-hidden rounded-md bg-white p-3">
      <div className="col-span-2 h-full flex-col justify-between hidden md:flex">
        <div className="h-44 w-full flex-1 basis-40 rounded-md overflow-hidden">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            speed={2000}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination]}
          >
            <SwiperSlide>
              <div className="relative h-[176px]">
                <Image
                  priority
                  src={"/images/bg-1.jpg"}
                  fill
                  className="h-full w-full object-cover"
                  alt=""
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative h-[176px]">
                <Image
                  priority
                  src={"/images/banner-2.jpg"}
                  fill
                  style={{ objectFit: "cover" }}
                  alt=""
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative h-[176px]">
                <Image
                  priority
                  src={"/images/product-1.jpg"}
                  fill
                  style={{ objectFit: "cover" }}
                  alt=""
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="h-44 relative w-full flex-1 basis-40 rounded-md overflow-hidden">
          <Image
            src="/images/food-2.jpg"
            fill
            alt=""
            sizes="(max-width: 768px) 10vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
      <div className="col-span-8 md:col-span-4 h-48 md:h-96 overflow-hidden rounded-md">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          speed={2000}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination]}
        >
          <SwiperSlide>
            <div className="relative h-[368px]">
              <Image
                priority
                src={"/images/bg-1.jpg"}
                fill
                className="h-full w-full rounded-md object-cover object-center"
                alt=""
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative h-[368px]">
              <Image
                src={"/images/banner-2.jpg"}
                fill
                style={{ objectFit: "cover" }}
                className="h-full w-full rounded-md object-cover"
                alt=""
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative h-[368px]">
              <Image
                src={"/images/banner-3.jpg"}
                fill
                style={{ objectFit: "cover" }}
                className="h-full w-full rounded-md object-cover"
                alt=""
                sizes="(max-width: 768px) 10vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="col-span-2 h-full flex-col overflow-hidden justify-between hidden md:flex">
        <div className="h-44 w-full flex-1 basis-40 rounded-md">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            speed={2000}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination]}
          >
            <SwiperSlide>
              <div className="relative h-[176px]">
                <Image
                  priority
                  src={"/images/bg-1.jpg"}
                  fill
                  className="h-full w-full object-cover"
                  alt=""
                  sizes="(max-width: 768px) 10vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative h-[176px]">
                <Image
                  priority
                  src={"/images/banner-2.jpg"}
                  fill
                  style={{ objectFit: "cover" }}
                  alt=""
                  sizes="(max-width: 768px) 10vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative h-[176px]">
                <Image
                  priority
                  src={"/images/product-1.jpg"}
                  fill
                  style={{ objectFit: "cover" }}
                  alt=""
                  sizes="(max-width: 768px) 10vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="h-44 relative w-full flex-1 basis-40 rounded-md overflow-hidden">
          <Image
            src="/images/food-1.jpg"
            fill
            alt=""
            sizes="(max-width: 768px) 10vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
    </div>
  );
};
