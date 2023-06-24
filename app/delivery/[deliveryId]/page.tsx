"use client";

import Image from "next/image";
import Link from "next/link";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { useDeliverySelector } from "@/hooks/useDeliverySelector";
import { getDeliveryCompany } from "@/services/delivery-companies";
import { setDeliveryCompany } from "@/store/features/delivery/deliverySlice";
import { useAppDispatch } from "@/store/store";
import { IDeliveryCompany } from "@/types";
import { parseDeliveryImageUrl } from "@/utils";
import { GetServerSideProps } from "next";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import "swiper/css";
import "swiper/css/pagination";
// #165474 - navbar
// #c8b600 -
// #c8b600 -

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { deliveryId } = context.query;
  const data = await getDeliveryCompany(deliveryId as string);

  return {
    props: {
      deliveryCompany: data,
    },
  };
};

const Delivery = ({
  deliveryCompany: company,
}: {
  deliveryCompany: IDeliveryCompany;
}) => {
  const { deliveryCompany } = useDeliverySelector();
  const [slider, setSlider] = useState<{ id: string; name: string }[]>([]);
  const dispatch = useAppDispatch();
  const { deliveryId } = useParams();

  useEffect(() => {
    dispatch(setDeliveryCompany(company));
    setSlider(company?.images);
  }, [company, dispatch, setDeliveryCompany]);

  if (!deliveryCompany) {
    return (
      <div>
        <h1 className="text-7xl">Delivery Company Not Found</h1>
      </div>
    );
  } else {
    return (
      <>
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
            {slider?.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="relative h-60 md:h-[520px] lg:h-[calc(100vh_-_97px)]">
                  <Image
                    src={parseDeliveryImageUrl(image.name)}
                    fill
                    className="h-full w-full object-fill md:object-fill object-center"
                    alt=""
                  />
                </div>
              </SwiperSlide>
            ))}
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
              <div className="w-[300px] h-[390px] bg-white p-5">
                <h4 className="pb-3 justify-center h-14 flex items-center font-semibold text-xl">
                  Cooked Food
                </h4>
                <div className="flex justify-center w-[250px] h-[240px] bg-slate-500">
                  <Image
                    src={`/images/food-2.jpg`}
                    alt=""
                    width="250"
                    height={250}
                    className="object-center object-cover"
                  />
                </div>
                <div className="flex justify-center pt-3">
                  <Link
                    href={`/delivery/${deliveryCompany?.slug}/category/cooked-food`}
                    className="text-white bg-[#c8b600] py-2 w-full text-center"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
              <div className="w-[300px] h-[390px] bg-white p-5">
                <h4 className="pb-3 justify-center h-14 flex items-center font-semibold text-xl">
                  Whole Food
                </h4>
                <div className="flex justify-center w-[250px] h-[240px] bg-slate-500">
                  <Image
                    src={`/images/food-2.jpg`}
                    alt=""
                    width="250"
                    height={250}
                    className="object-center object-cover"
                  />
                </div>
                <div className="flex justify-center pt-3">
                  <Link
                    href={`/delivery/${deliveryCompany?.slug}/category/whole-food`}
                    className="text-white bg-[#c8b600] py-2 w-full text-center"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
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

          <div className="bg-white p-2 md:p-5 w-5/12 md:w-7/12 lg:w-5/12 mx-auto  text-xl md:text-2xl font-bold text-center  text-blue-500 shadow-md">
            <p className="mb-2">Contact:</p>
            <div className="flex flex-col gap-x-5 md:flex-row justify-evenly">
              <div className="flex justify-center items-center gap-2 whitespace-nowrap">
                <FiPhoneCall />
                <span>{company?.phoneNumber}</span>
              </div>
              <div className="flex justify-center items-center gap-2 whitespace-nowrap">
                <BsWhatsapp />
                <span>{company?.whatsappNumber}</span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Delivery;
