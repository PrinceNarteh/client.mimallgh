import Image from "next/image";
import { useEffect, useState } from "react";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { parseDeliveryImageUrl } from "@/utils";
import "swiper/css";
import "swiper/css/pagination";

interface Props {
  images?: {
    id: string;
    name: string;
  }[];
}

export const DeliverySlider = ({ images }: Props) => {
  const [slides, setSlides] = useState<
    { id: string; name: string }[] | undefined
  >(undefined);

  useEffect(() => {
    setSlides(images);
  }, [images]);

  return (
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
        {slides?.map((image, index) => (
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
  );
};
