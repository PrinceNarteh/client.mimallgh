import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { MdAddCall } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="relative bg-gray-900 overflow-hidden">
      <div className="container px-5 pt-24 mx-auto gap-y-16 flex flex-wrap flex-col md:items-center lg:items-start md:flex-row md:flex-nowrap">
        <div className="w-64 h-fit flex-shrink-0 mx-auto text-center md:text-left">
          <p className="flex title-font font-medium items-center md:justify-center justify-center text-gray-900">
            <span className="text-white text-sm font-semibold">MiMall</span>
          </p>
          <p className="mt-2 text-sm text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            nesciunt nulla temporibus tenetur quo inventore, natus possimus
            suscipit voluptas numquam pariatur perferendis, quidem ipsum tempora
            est maiores error amet similique.
          </p>
        </div>
        <div className="flex-grow text-center flex flex-wrap md:pl-20 -mt-10 md:mt-10 md:text-left">
          <div className=" w-full lg:w-1/4 md:w-1/2 px-4">
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
                  How to Buy Here
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/" className="text-gray-400 hover:text-white">
                  Returns and Refund
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/" className="text-gray-400 hover:text-white">
                  Terms and Conditions
                </Link>
              </li>
            </nav>
          </div>
          <div className=" w-full lg:w-1/4 md:w-1/2 px-4">
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
          <div className=" w-full lg:w-1/4 md:w-1/2 px-4">
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
          <div className=" w-full lg:w-1/4 md:w-1/2 px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
              OUR SERVICES
            </h2>
            <nav className="list-none mb-10">
              <li className="mb-2">
                <Link href="/" className="text-gray-400 hover:text-white">
                  Categories
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/" className="text-gray-400 hover:text-white">
                  Product Videos
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/" className="text-gray-400 hover:text-white">
                  Trending Videos
                </Link>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 bg-opacity-75">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-400 text-sm text-center sm:text-left">
            MiMall
          </p>
          <span className="inline-flex gap-5 sm:ml-auto sm:mt-auto mt-2 justify-center sm:justify-center">
            <MdAddCall className="text-white" />
            <FaFacebookF className="text-white" />
            <FaWhatsapp className="text-white" />
            <FaTwitter className="text-white" />
            <FaInstagram className="text-white" />
            <FaTiktok className="text-white" />
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
