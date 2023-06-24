import React from "react";
import Image from "next/image";
import Link from "next/link";
import deliveryIcon from "../../../assets/svgs/delivery-icon.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import DeliveryLayout from "@/components/layout/DeliveryLayout";
import { useRouter } from "next/router";
import { BsWhatsapp } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
// #165474 - navbar
// #c8b600 -
// #c8b600 -

const cards = [
  {
    label: "Fashion And Wears",
    link: "fashion-and-wears",
  },
  {
    label: "Food",
    link: "food",
  },
  {
    label: "Grocery And General",
    link: "grocery-and-general",
  },
  {
    label: "Health And Wellness",
    link: "health-and-wellness",
  },
  {
    label: "Home And Electrical Appliances",
    link: "home-and-electrical-appliances",
  },
  {
    label: "Personal Services",
    link: "personal-services",
  },
  {
    label: "Printing And Stationery",
    link: "printing-and-stationery",
  },
  {
    label: "Tech",
    link: "tech",
  },
];

const Delivery = () => {
  const {
    query: { deliveryId },
  } = useRouter();

  return (
    <DeliveryLayout>
      <div className="">
        <div className="h-60 md:h-[500px] lg:h-[calc(100vh_-_98px)]">
          <Swiper
            spaceBetween={0}
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
              <div className="relative h-60 md:h-[520px] lg:h-[calc(100vh_-_98px)]">
                <Image
                  src={"/images/bg-1.jpg"}
                  fill
                  className="h-full w-full object-cover object-center"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative h-60 md:h-[520px] lg:h-[calc(100vh_-_98px)]">
                <Image
                  src={"/images/banner-2.jpg"}
                  fill
                  style={{ objectFit: "cover" }}
                  className="h-full w-full object-cover"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative h-60 md:h-[520px] lg:h-[calc(100vh_-_98px)]">
                <Image
                  src={"/images/banner-3.jpg"}
                  fill
                  style={{ objectFit: "cover" }}
                  className="h-full w-full object-cover"
                  alt=""
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className=" bg-gray-300">
          <div className="flex flex-col justify-center w-11/12 mx-auto mb-32">
            <div className="bg-white p-2 md:p-5 z-10 w-full mx-auto text-center md:-translate-y-16 ">
              <h3 className="text-xl md:text-4xl font-bold underline md:mb-2">
                What We Do
              </h3>
              <p className="text-lg md:text-3xl">
                We <span className="text-orange-500 font-bold">CONNECT</span>{" "}
                you to Sellers, you{" "}
                <span className="text-orange-500 font-bold">ORDER</span>, We{" "}
                <span className="text-orange-500 font-bold">DELIVER</span>
              </p>
            </div>

            <div className="flex flex-wrap gap-10 justify-center mt-10 md:mt-0">
              {cards.map((card, idx) => (
                <div key={idx} className="w-[300px] h-[390px] bg-white p-5">
                  <h4 className="pb-3 text-center h-14 flex items-center">
                    Order {card.label} (100 sellers 200 ads)
                  </h4>
                  <div className="flex justify-center w-[250px] h-[240px] bg-slate-500">
                    <Image
                      src={`/images/${card.link}-2.jpg`}
                      alt=""
                      width="250"
                      height={250}
                      className="object-center object-cover"
                    />
                  </div>
                  <div className="flex justify-center pt-3">
                    <Link
                      href={`/category/${card.link}`}
                      className="text-white bg-[#c8b600] py-2 w-full text-center"
                    >
                      Shop Now
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-4 w-11/12 mx-auto text-center -translate-y-16 text-blue-500 shadow-md">
            <h3 className="text-xl md:text-4xl font-bold mb-2">
              OTHER SERVICES
            </h3>
          </div>

          <div className="flex flex-col justify-center w-11/12 mx-auto mb-10">
            <div className="flex flex-wrap gap-10 justify-center">
              <div
                className="w-72 flex flex-col justify-between p-4 h-80 bg-[url('/images/delivery-cooperate.jpg')]"
                style={{
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                <div className="w-full bg-[#165474] text-center text-white py-2">
                  Cooperate Delivery
                </div>
                <Link
                  href={`/delivery/${deliveryId}/request`}
                  className="w-full bg-[#c8b600] text-center text-white py-2"
                >
                  Order Now
                </Link>
              </div>
              <div
                className="w-72 flex flex-col justify-between p-4 h-80 bg-[url('/images/delivery-personal.jpg')]"
                style={{
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                <div className="w-full bg-[#165474] text-center text-white py-2">
                  Personal Delivery
                </div>
                <Link
                  href={`/delivery/${deliveryId}/request`}
                  className="w-full bg-[#c8b600] text-center text-white py-2"
                >
                  Order Now
                </Link>
              </div>
              <div
                className="w-72 flex flex-col justify-between p-4 h-80 bg-[url('/images/delivery-pick-ups.jpg')]"
                style={{
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                <div className="w-full bg-[#165474] text-center text-white py-2">
                  Pick ups & Drop off
                </div>
                <Link
                  href={`/delivery/${deliveryId}/request`}
                  className="w-full bg-[#c8b600] text-center text-white py-2"
                >
                  Order Now
                </Link>
              </div>
              <div
                className="w-72 flex flex-col justify-between p-4 h-80 bg-[url('/images/delivery-errands.jpg')]"
                style={{
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                <div className="w-full bg-[#165474] text-center text-white py-2">
                  Errands
                </div>
                <Link
                  href={`/delivery/${deliveryId}/request`}
                  className="w-full bg-[#c8b600] text-center text-white py-2"
                >
                  Order Now
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-white p-2 md:p-5 w-6/12 md:w-7/12 mx-auto  text-xl md:text-2xl font-bold text-center  text-blue-500 shadow-md">
            <p className="mb-2">Contact:</p>
            <div className="flex flex-col md:flex-row justify-evenly">
              <div>
                <FiPhoneCall />
                <span>024 123 4567</span>
              </div>
              <div>
                <BsWhatsapp />
                <span>024 123 4567</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DeliveryLayout>
  );
};

export default Delivery;
