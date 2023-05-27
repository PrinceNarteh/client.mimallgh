import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import deliveryIcon from "../../assets/svgs/delivery-icon.svg";
import { useDeliverySelector } from "@/store/features/delivery/deliverySlice";
import { MdAddCall } from "react-icons/md";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const DeliveryLayout = ({ children }: { children: React.ReactNode }) => {
  const { deliveryCompanyName, deliveryCompanyLink } = useDeliverySelector();

  return (
    <div>
      <div className="fixed w-full z-50">
        <div className="h-24 hidden relative md:flex justify-center">
          <Image
            src={"/images/delivery-banner.jpg"}
            fill
            alt=""
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="bg-[#165474] md:absolute z-10 py-2 flex flex-col md:flex-row justify-between items-start md:items-center pr-5 md:h-16 md:w-11/12 m-auto left-0 right-0 bottom-6 md:-bottom-8">
          <div className="bg-white h-full rounded-r-full flex items-center py-2 px-4 shrink-0">
            <div className="w-10 h-10 flex justify-center items-center">
              <Image src={deliveryIcon} alt="" width={50} height={50} />
            </div>
            <Link
              href={`/delivery/${deliveryCompanyLink}`}
              className="ml-3 font-bold text-lg text-[#165474]"
            >
              {deliveryCompanyName.toUpperCase()}
            </Link>
          </div>
          <div className="relative text-white flex px-2 pl-5 justify-between items-center text-sm py-2 mt-2 w-full">
            <Link href={`/delivery/${deliveryCompanyLink}`}>Home</Link>
            <Link href="#">Services</Link>
            <Link href="#" className="hidden">
              Working Hours
            </Link>
            <Link href="#" className="md:block">
              More
            </Link>
            <IoSearchOutline className="text-white text-2xl lg:hidden" />
            <div className="bg-white hidden lg:block py-1 px-4 rounded-full">
              <input
                type="text"
                placeholder="Search all products..."
                className="outline-none"
              />
            </div>
            <div className="absolute right-0 top-16 bg-[#165474] py-2 arrow before:left-10">
              <Link href="/" className="block py-2 px-2">
                Pricing Policy
              </Link>
              <Link href="/" className="block py-2 px-2">
                Working Hours
              </Link>
              <Link href="/" className="block py-2 px-2">
                Promotion Campaign
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-300 lg:block cursor-pointer pt-24">
        {children}
      </div>
      {/* <footer className="footer before:-top-9 before:h-20 relative bg-gray-800 text-white overflow-hidden">
        <div className="w-11/12 flex flex-col mx-auto text-xl gap-5 pt-28 pb-10">
          <div className="flex justify-evenly gap-5 flex-wrap">
            <p>About us</p>
            <p>Pricing Policies</p>
            <p>Pricing Policies</p>
            <p>Customer Service</p>
            <p>Services</p>
            <p>Tutorial Videos</p>
            <p>Follow Us</p>
          </div>
          <div className="flex my-3 flex-col items-center">
            <p className="mb-3">Payment Methods:</p>
            <div className="flex gap-2">
              <div className="w-20 h-14">
                <Image
                  src="/images/mtn-momo.png"
                  width={200}
                  height={100}
                  alt=""
                  className="bg-white"
                />
              </div>
              <div className="w-20 h-14">
                <Image
                  src="/images/vodafone-cash.png"
                  width={100}
                  height={50}
                  alt=""
                  className="bg-white"
                />
              </div>
              <Image
                src="/images/airteltigo-money.jpg"
                width={100}
                height={0}
                alt=""
                className="bg-white"
              />
            </div>
          </div>
          <div className="flex justify-center">
            <span className="inline-block pr-3">Powered By:</span>
            <Image
              src="/images/name-logo.png"
              alt=""
              width={100}
              height={200}
            />
          </div>
        </div>
      </footer> */}
      <footer className="relative bg-gray-900 overflow-hidden">
        <div className="w-11/12 grid md:grid-auto-fit-lg  mx-auto pt-32 pb-5">
          {/* About Us */}
          <div className="text-center lg:text-left">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
              ABOUT US
            </h2>
            <nav className="list-none mb-10">
              <li className="mb-2">
                <Link href="/" className="text-gray-400 hover:text-white">
                  About our Company
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/" className="text-gray-400 hover:text-white">
                  Business Policies
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/" className="text-gray-400 hover:text-white">
                  Privacy Notice
                </Link>
              </li>
            </nav>
          </div>
          {/* Customer Service */}
          <div className="text-center lg:text-left">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
              CUSTOMER SERVICE
            </h2>
            <nav className="list-none mb-10">
              <li className="mb-2">
                <Link href="/" className="text-gray-400 hover:text-white">
                  Help Center
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/" className="text-gray-400 hover:text-white">
                  Terms & Conditions
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/" className="text-gray-400 hover:text-white">
                  Ratings & Reviews
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/" className="text-gray-400 hover:text-white">
                  Frequently Asked Questions
                </Link>
              </li>
            </nav>
          </div>
          <div className="text-center lg:text-left">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
              OUR SERVICES
            </h2>
            <nav className="list-none mb-10">
              <li className="mb-2">
                <Link href="/" className="text-gray-400 hover:text-white mb-2">
                  Shopping
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/" className="text-gray-400 hover:text-white mb-2">
                  Errands
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/" className="text-gray-400 hover:text-white mb-2">
                  Corporate Delivery
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-400 hover:text-white mb-2">
                  Gas Filling Services
                </Link>
              </li>
            </nav>
          </div>
          <div className="text-center lg:text-left">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
              Earn With Us
            </h2>
            <nav className="list-none mb-10">
              <li className="mb-2">
                <Link href="/" className="text-gray-400 hover:text-white">
                  Sell Here For Free
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/" className="text-gray-400 hover:text-white">
                  Advertise Here
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/" className="text-gray-400 hover:text-white">
                  Be A Rider With Us
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/" className="text-gray-400 hover:text-white">
                  Advertise Here
                </Link>
              </li>
            </nav>
          </div>
          <div className="text-center lg:text-left">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
              MAKE MONEY WITH US
            </h2>
            <nav className="list-none mb-10">
              <li className="mb-2">
                <Link href="/" className="text-gray-400 hover:text-white">
                  Be a Sales Agent
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/" className="text-gray-400 hover:text-white">
                  Be a Digital Marketing Assistant
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/" className="text-gray-400 hover:text-white">
                  Be a Content Creator
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/" className="text-gray-400 hover:text-white">
                  Advertise Here
                </Link>
              </li>
            </nav>
          </div>

          <div className="text-center lg:text-left">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
              Learn With Us
            </h2>
            <nav className="list-none mb-10">
              <li className="mb-2">
                <Link href="/" className="text-gray-400 hover:text-white">
                  Digital Marketing
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/" className="text-gray-400 hover:text-white">
                  Content Creation
                </Link>
              </li>
            </nav>
          </div>

          <div className="flex flex-col items-center text-white md:col-span-2 space-y-5 lg:items-start">
            <div>
              <h2 className="title-font font-medium md:text-center lg:text-left text-white tracking-widest text-sm mb-3">
                Follow Us
              </h2>
              <span className="inline-flex gap-5 sm:ml-auto text-white sm:mt-auto mt-2 justify-center sm:justify-center text-2xl">
                <MdAddCall className="hover:scale-125 cursor-pointer duration-300" />
                <FaFacebookF className="hover:scale-125 cursor-pointer duration-300" />
                <FaWhatsapp className="hover:scale-125 cursor-pointer duration-300" />
                <FaTwitter className="hover:scale-125 cursor-pointer duration-300" />
                <FaInstagram className="hover:scale-125 cursor-pointer duration-300" />
                <FaTiktok className="hover:scale-125 cursor-pointer duration-300" />
              </span>
            </div>

            <div>
              <h2 className="title-font font-medium text-white lg:text-left md:text-center tracking-widest text-sm mb-3">
                Payment Methods
              </h2>

              <div className="flex gap-2">
                <div className="w-20 relative h-14">
                  <Image
                    src="/images/mtn-momo.png"
                    fill
                    alt=""
                    className="bg-white object-cover"
                  />
                </div>
                <div className="w-20 h-14">
                  <Image
                    src="/images/vodafone-cash.png"
                    width={100}
                    height={50}
                    alt=""
                    className="bg-white"
                  />
                </div>
                <Image
                  src="/images/airteltigo-money.jpg"
                  width={100}
                  height={0}
                  alt=""
                  className="bg-white"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 bg-opacity-75">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-400 text-sm text-center sm:text-left">
              MiMall
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DeliveryLayout;
