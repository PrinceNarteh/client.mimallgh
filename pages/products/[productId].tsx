import { Container, ProductCard } from "@/components";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  MdContentCopy,
  MdOutlineStar,
  MdOutlineStarHalf,
} from "react-icons/md";
import ReactImageMagnify from "react-image-magnify";
import {
  FacebookIcon,
  FacebookShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
import { topDeals } from "@/utils/data";
import { Product } from "@/types";
import { GetServerSideProps } from "next";
import { getProduct, getProducts } from "@/services/products";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import { useAppDispatch } from "@/store/store";
import { addToCart } from "@/store/features/cart/cartSlice";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { productId } = context.query;
  const data = await getProduct(productId as string);

  return {
    props: {
      product: data,
    },
  };
};

const ProductDetails = ({ product }: { product: Product }) => {
  const [currentImg, setCurrentImg] = useState(0);
  const { asPath } = useRouter();
  const dispatch = useAppDispatch();
  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";

  const url = `${origin}${asPath}`;

  const handleAddToCart = (product: Product) => {
    dispatch(
      addToCart({
        image: product.images[0].secure_url,
        price: product.price,
        productId: product.id,
        productName: product.title,
        quantity: 1,
        shopId: product.shop.id,
        shopName: product.shop.name,
      })
    );
  };

  const [similarProduct, setSimilarProduct] = useState<
    {
      category: string;
      data: Product[];
    }[]
  >([]);

  useEffect(() => {
    const fetchData = async () => {
      const products = await getProducts(`category=${product.category}`);
      setSimilarProduct(products.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="mx-auto mb-10 w-11/12 pt-5">
        <div className="lg:grid gap-5 lg:grid-cols-12">
          <div className="relative lg:col-span-9 flex flex-col gap-5 md:flex-row">
            <div className="">
              <div className="top-[110px] pb-10 md:sticky">
                <div className="hidden md:block h-fit w-[400px] shrink-0">
                  <div className="flex justify-between gap-5">
                    <div className="flex flex-col justify-center gap-3">
                      {product.images.map((image, idx) => (
                        <div
                          key={idx}
                          className="relative h-20 w-20 cursor-pointer rounded border border-gray-400"
                          onMouseEnter={() => setCurrentImg(idx)}
                        >
                          <Image
                            src={image.secure_url}
                            alt="product-one"
                            fill
                            style={{ objectFit: "cover" }}
                            sizes="48,56"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="magnify w-[500px] h-[500px]">
                      <ReactImageMagnify
                        {...{
                          smallImage: {
                            alt: "Wristwatch by Ted Baker London",
                            isFluidWidth: true,
                            src: product.images[currentImg].secure_url,
                          },
                          largeImage: {
                            src: product.images[currentImg].secure_url,
                            width: 640,
                            height: 600,
                          },
                          enlargedImageContainerDimensions: {
                            width: "200%",
                            height: "150%",
                          },
                          // enlargedImageStyle: { objectFit: "cover" },
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="md:hidden h-fit max-w-full shrink-0">
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
                            src={"/images/bg-1.jpg"}
                            fill
                            className="h-full w-full rounded-md object-cover object-center"
                            alt=""
                            sizes="400px,368px"
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
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="relative h-[368px]">
                          <Image
                            fill
                            style={{ objectFit: "cover" }}
                            className="h-full w-full rounded-md object-cover"
                            alt=""
                            src={"/images/bg-1.jpg"}
                          />
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
                <div className="h-fit">
                  <div className="hidden md:block">
                    <h3 className="sh-underline mt-5 text-2xl">
                      Product Video
                    </h3>
                    <div className="h-[280px]">
                      <ReactPlayer
                        url={"/videos/sea-shore.mp4"}
                        controls
                        width={"100%"}
                        height={"100%"}
                      />
                    </div>
                  </div>
                  <div className="flex h-10 my-5 w-full items-center gap-2">
                    <div className="flex h-10 w-full items-center gap-2">
                      <h6>Share:</h6>
                      <FacebookShareButton
                        url={url}
                        quote="Hello"
                        className="block"
                      >
                        <FacebookIcon
                          size={25}
                          style={{ borderRadius: "50%" }}
                        />
                      </FacebookShareButton>
                      <WhatsappShareButton url={url} className="block">
                        <WhatsappIcon
                          size={25}
                          style={{ borderRadius: "50%" }}
                        />
                      </WhatsappShareButton>
                      <MdContentCopy size={20} className="cursor-pointer" />
                    </div>
                    <button
                      className="rounded-lg shrink-0 border border-pink-500 px-5 py-2 text-pink-500 duration-200 hover:bg-pink-500 hover:text-white"
                      onClick={() => handleAddToCart(product)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
                <div className="mb-4 flex justify-end"></div>
                <div>
                  <h5 className="sh-underline mb-2">Ratings and Reviews</h5>
                  <div className="flex text-2xl text-orange-500">
                    <MdOutlineStar />
                    <MdOutlineStar />
                    <MdOutlineStar />
                    <MdOutlineStar />
                    <MdOutlineStarHalf />
                  </div>
                </div>
                <div className="mt-3">
                  <h5 className="sh-underline mb-2">FAQs</h5>
                  <p>100 answered questions</p>
                </div>
              </div>
            </div>
            <div className="min-h-96">
              <h3 className="border-b border-b-gray-400 pb-3 text-2xl font-semibold text-gray-700">
                {product.title}
              </h3>
              <p>Other names: </p>
              <p className="mt-2 flex items-start tracking-widest">
                <span className="text-xl">¢</span>
                <span className="text-4xl">{product.price}</span>
              </p>
              <span className="mb-2 block text-gray-500">
                Store Price: GH¢122.00
              </span>
              <div className="text-gray-500">
                <p>{product.description}</p>
                <div className="pl-5">
                  <div className="my-5">
                    <h3 className="font-bold">About This Item</h3>
                    <ol className="list-decimal pl-7">
                      <li>Lorem ipsum dolor sit amet.</li>
                      <li>Lorem, ipsum dolor.</li>
                      <li>Lorem ipsum dolor sit.</li>
                    </ol>
                  </div>

                  <div className="my-5">
                    <h3 className="font-bold">Use Occasions</h3>
                    <ol className="list-decimal pl-7">
                      <li>Lorem ipsum dolor sit amet.</li>
                      <li>Lorem, ipsum dolor.</li>
                      <li>Lorem ipsum dolor sit.</li>
                    </ol>
                  </div>

                  <div className="my-5">
                    <h3 className="font-bold">Warrant & Returns</h3>
                    <ol className="list-decimal pl-7">
                      <li>Lorem ipsum dolor sit amet.</li>
                      <li>Lorem, ipsum dolor.</li>
                      <li>Lorem ipsum dolor sit.</li>
                    </ol>
                  </div>
                </div>
                <Link
                  href={`/web-store/${product.shop.id}`}
                  className="mb-5 pl-2 text-md font-semibold md:text-md cursor-pointer"
                >
                  Visit {product.shop.name} Web Shop
                </Link>
                <div className="flex justify-end pr-10 mt-3">
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="rounded-lg border border-pink-500 px-5 py-2 text-pink-500 duration-200 hover:bg-pink-500 hover:text-white"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full overflow-y-auto lg:col-span-3">
            <div className="mt-2 mb-5 flex justify-between border-b-2">
              <h4 className="sh-underline relative md:text-3xl">Top Deals</h4>
            </div>
            <div className="w-full">
              <div className="flex flex-nowrap lg:flex-wrap md:justify-center w-full p-5 gap-5">
                {topDeals.map((topDeal, idx) => (
                  <Link
                    key={idx}
                    href={`/products/${idx}`}
                    className="cursor-pointer "
                  >
                    <div className="relative h-24 w-32 flex-1 overflow-hidden rounded-lg shadow-md">
                      <Image src={topDeal.image} fill alt="" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 pb-5">
          <h3 className="sh-underline text-xl md:text-2xl font-semibold">
            Compare with similar items
          </h3>
          <div className="w-full overflow-x-auto">
            <div className="flex justify-start gap-5 py-4 pt-5">
              {similarProduct[0]?.data.slice(0, 6).map((product, idx) => (
                <ProductCard key={idx} product={product} />
              ))}
            </div>
          </div>
        </div>
        <div className="px-2 mx-auto md:w-10/12 space-y-5">
          <h3 className="sh-underline mt-5 text-xl md:text-2xl">
            Customers Reviews and Rating
          </h3>
          <div>
            <h5 className="font-semibold">100% Ratings</h5>
            <div className="space-y-2 pl-5">
              <div className="flex">
                <div className="flex basis-40 text-2xl text-orange-500">
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
                </div>
                <div>90%</div>
              </div>
              <div className="flex">
                <div className="flex basis-40 text-2xl text-orange-500">
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStarHalf />
                </div>
                <div>10%</div>
              </div>
            </div>
          </div>
          <div className="">
            <h5 className="mb-2 text-lg font-semibold">Top Reviews</h5>
            <dl className="pl-5">
              <ol className="space-y-2">
                <li>
                  <dt className="text-semibold">Adwoa Sarfo</dt>
                  <dd className="pl-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tempora, vitae doloremque illum quas voluptates debitis rem
                    aut quo, sint quis omnis labore soluta. Natus molestias ab
                    repudiandae ipsa provident dolorum.
                  </dd>
                </li>
                <li>
                  <dt className="text-bold">Simon Agyenim Boateng</dt>
                  <dd className="pl-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tempora, vitae doloremque illum quas voluptates debitis rem
                    aut quo, sint quis omnis labore soluta. Natus molestias ab
                    repudiandae ipsa provident dolorum.
                  </dd>
                </li>
              </ol>
            </dl>
            <div className="border p-5 mt-5 rounded">
              <form>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="title"
                    name="title"
                    id="title"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 pl-1 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="semail"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Email address
                  </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <textarea
                    name="content"
                    id="content"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="content"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    content
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="px-2 mx-auto mt-10 md:w-10/12">
          <h3 className="sh-underline my-5 text-2xl">
            Frequently Asked Question
          </h3>
          <div>
            <dl className="pl-5">
              <ol className="list-decimal space-y-2">
                <li>
                  <dt className="font-bold">Adwoa Sarfo</dt>
                  <dd className="pl-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tempora, vitae doloremque illum quas voluptates debitis rem
                    aut quo, sint quis omnis labore soluta. Natus molestias ab
                    repudiandae ipsa provident dolorum.
                  </dd>
                </li>
                <li>
                  <dt className="font-bold">Simon Agyenim Boateng</dt>
                  <dd className="pl-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tempora, vitae doloremque illum quas voluptates debitis rem
                    aut quo, sint quis omnis labore soluta. Natus molestias ab
                    repudiandae ipsa provident dolorum.
                  </dd>
                </li>
              </ol>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
