import Image from "next/image";
import Link from "next/link";
import React from "react";
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
    link: "grocery_and_general",
  },
  {
    label: "Health And Wellness",
    link: "health_and_wellness",
  },
  {
    label: "Home And Electrical Appliances",
    link: "home_and_electrical_appliances",
  },
  {
    label: "Personal Services",
    link: "personal_services",
  },
  {
    label: "Printing And Stationery",
    link: "printing_and_stationery",
  },
  {
    label: "Tech",
    link: "tech",
  },
];

const Delivery = () => {
  return (
    <div>
      <div className="bg-teal-500 h-32 relative flex justify-center items-center">
        <div className="absolute bg-[#165474] flex justify-between items-center pr-5 h-16 w-11/12 mx-auto -bottom-8">
          <div className="bg-white h-full w-80 rounded-r-full flex items-center p-5">
            <h5 className="font-bold text-lg">OHEMAA'S DELIVERY</h5>
          </div>
          <div className="text-white space-x-5 text-lg">
            <Link href="/">Home</Link>
            <Link href="#">Services</Link>
            <Link href="#">Working Hours</Link>
            <Link href="#">More</Link>
          </div>
          <div className="bg-white py-2 px-4 rounded-full">
            <input type="text" placeholder="Search all categories..." />
          </div>
        </div>
      </div>
      <div className="h-screen text-[#165474]"></div>
      <div className=" bg-gray-300">
        <div className="flex flex-col justify-center w-11/12 mx-auto mb-32">
          <div className="bg-white p-5 w-full mx-auto text-center -translate-y-16 ">
            <h3 className="text-4xl font-bold underline mb-2">What We Do</h3>
            <p className="text-3xl">
              We <span className="text-orange-500 font-bold">CONNECT</span> you
              to Sellers, you{" "}
              <span className="text-orange-500 font-bold">ORDER</span>, We{" "}
              <span className="text-orange-500 font-bold">DELIVER</span>
            </p>
          </div>

          <div className="flex flex-wrap gap-10 justify-center">
            {cards.map((card, idx) => (
              <div key={idx} className="w-[300px] h-[390px] bg-white p-5">
                <h4 className="pb-3 text-center h-14 flex items-center">
                  Order {card.label} (100 sellers 200 ads)
                </h4>
                <div className="flex justify-center w-[250px] h-[240px] bg-slate-500">
                  <Image
                    src="/images/fashion-and-wears-2.jpg"
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

        <div className="bg-white p-5 w-11/12 mx-auto text-center -translate-y-16 text-blue-500 shadow-md">
          <h3 className="text-4xl font-bold mb-2">OTHER SERVICES</h3>
        </div>

        <div className="flex flex-col justify-center w-11/12 mx-auto mb-32">
          <div className="flex flex-wrap gap-10 justify-center">
            <div className="w-72 h-72 bg-teal-400"></div>
            <div className="w-72 h-72 bg-teal-400"></div>
            <div className="w-72 h-72 bg-teal-400"></div>
            <div className="w-72 h-72 bg-teal-400"></div>
          </div>
        </div>

        <div className="bg-white p-5 w-6/12 mx-auto flex justify-evenly text-2xl font-bold text-center -translate-y-16 text-blue-500 shadow-md">
          <p>Call: 024 123 4567</p>
          <p>Call: 050 123 4567</p>
        </div>
      </div>

      <div className="w-11/12 flex mx-auto justify-between text-xl gap-5 py-5">
        <p>About us</p>
        <p>Pricing Policies</p>
        <p>Pricing Policies</p>
        <p>Customer Service</p>
        <p>Services</p>
        <p>Tutorial Videos</p>
        <p>Follow Us</p>
      </div>
    </div>
  );
};

export default Delivery;
