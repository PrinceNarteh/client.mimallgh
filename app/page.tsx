import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <main className="">
      <nav className="bg-navy-blue py-5">
        <div className="flex justify-between items-center px-5 md:px-10">
          <div className="h-5 relative">
            <img src="/images/name-logo.png" alt="logo" className="h-5" />
          </div>
          <ul className="flex gap-3 md:gap-5 text-white text-sm md:text-lg">
            <li>
              <Link href="/">Home</Link>
            </li>

            <li>
              <Link href="/delivery/winike-dispatch">Delivery</Link>
            </li>
            <li>
              <a href="https://wa.me/message/NBARCJPSE3P2B1">Help</a>
            </li>
          </ul>
        </div>
      </nav>
      {/* SECTION ONE */}
      <section className="p-5 lg:min-h-[calc(100vh_-_68px)] max-w-7xl mx-auto overflow-hidden">
        <h2 className="text-center text-orange-500 text-3xl font-bold">
          WHAT WE DO
        </h2>
        <h3 className="text-navy-blue flex items-center justify-center gap-2 text-3xl text-center my-3">
          <Number>1</Number> MiMall eEasy-coms
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          <div className="col-span-12 md:col-span-8">
            <div className="text-justify bg-navy-blue text-white p-5 md:text-xl rounded">
              <span className="text-orange-500">a.</span> We connect you to All
              food and food stuff vendors on UCC campus and other Top food
              vendors from Cape Coast! You buy from them! We DELIVER right to
              your door-step!
            </div>

            <div className="grid grid-auto-fit-md gap-3 mt-5">
              <div className="relative h-52 rounded overflow-hidden">
                <Image
                  src="/images/sec-one-img-one.jpg"
                  alt=""
                  fill
                  className="rounded object-cover"
                />
              </div>
              <div className="relative h-52 rounded overflow-hidden">
                <Image
                  fill
                  src="/images/sec-one-img-three.jpeg"
                  alt=""
                  className="rounded object-cover"
                />
              </div>
              <div className="relative h-52 rounded overflow-hidden hidden md:block">
                <Image
                  fill
                  src="/images/sec-one-img-two.jpg"
                  alt=""
                  className="rounded object-cover"
                />
              </div>
              <div className="relative h-52 rounded overflow-hidden hidden md:block">
                <Image
                  fill
                  src="/images/sec-one-img-four.jpg"
                  alt=""
                  className="rounded object-cover"
                />
              </div>
              <div className="relative h-52 rounded overflow-hidden hidden md:block">
                <Image
                  fill
                  src="/images/sec-one-img-five.jpg"
                  alt=""
                  className="rounded object-cover"
                />
              </div>
              <div className="relative h-52 rounded overflow-hidden hidden md:block">
                <Image
                  fill
                  src="/images/sec-one-img-six.jpg"
                  alt=""
                  className="rounded object-cover"
                />
              </div>
            </div>
          </div>
          <div className="relative max-h-fit hidden col-span-4 rounded-md overflow-hidden lg:block">
            <Image
              fill
              src="/images/pexels-kindel-media-6868797.jpg"
              alt=""
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* SECTION TWO */}
      <div className="bg-gray-100">
        <section className="flex items-center px-5 py-20 lg:min-h-screen max-w-7xl mx-auto overflow-hidden">
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
              <div className="relative max-h-fit hidden col-span-4 rounded-md overflow-hidden lg:block">
                <Image
                  fill
                  src="/images/section-two.jpeg"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="col-span-12 md:col-span-8">
                <div className="text-justify bg-navy-blue text-white p-5 md:text-xl rounded">
                  <span className="text-orange-500">b.</span> We connect you to
                  Top sellers in Fashion, Techs, Pharmacy, etc. in and outside
                  campus.
                </div>

                <div className="grid grid-auto-fit gap-3 mt-5">
                  <div className="relative h-52">
                    <Image
                      fill
                      src="/images/sec-two-img-one.jpg"
                      alt=""
                      className="rounded object-cover"
                    />
                  </div>
                  <div className="relative h-52">
                    <Image
                      fill
                      src="/images/sec-two-img-two.jpg"
                      alt=""
                      className="rounded object-cover"
                    />
                  </div>
                  <div className="relative h-52 hidden md:block">
                    <Image
                      fill
                      src="/images/sec-two-img-three.png"
                      alt=""
                      className="rounded object-cover"
                    />
                  </div>
                  <div className="relative h-52 hidden md:block">
                    <Image
                      fill
                      src="/images/sec-one-img-four.jpg"
                      alt=""
                      className="rounded object-cover"
                    />
                  </div>
                  <div className="relative h-52 hidden md:block">
                    <Image
                      fill
                      src="/images/sec-one-img-five.jpg"
                      alt=""
                      className="rounded object-cover"
                    />
                  </div>
                  <div className="relative h-52 hidden md:block">
                    <Image
                      fill
                      src="/images/sec-one-img-six.jpg"
                      alt=""
                      className="rounded object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* SECTION THREE */}
      <section className="flex items-center px-5 py-20 lg:min-h-screen max-w-7xl mx-auto overflow-hidden">
        <div>
          <h3 className="text-navy-blue flex items-center justify-center gap-2 text-3xl text-center my-3">
            <Number>2</Number> MiHostels Hub
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            <div className="col-span-12 md:col-span-8">
              <div className="text-justify bg-navy-blue text-white p-5 md:text-xl rounded">
                In partnership with the SRC-UCC, we give students opportunity to
                create contents (Pictures & Videos) about their hostels & rooms
                vacancy post on our telegram platform to help their colleagues
                hunting for hostels and in return paid per the number of views.
                This is collective efforts in solving Hostel accessability
                problems.
              </div>

              <div className="grid grid-auto-fit gap-3 mt-5">
                <div className="relative h-52">
                  <Image
                    fill
                    src="/images/sec-three-img-one.jpg"
                    alt=""
                    className="rounded object-cover"
                  />
                </div>
                <div className="relative h-52">
                  <Image
                    fill
                    src="/images/sec-three-img-two.jpg"
                    alt=""
                    className="rounded object-cover"
                  />
                </div>
                <div className="relative h-52 hidden md:block">
                  <Image
                    fill
                    src="/images/sec-three-img-three.jpg"
                    alt=""
                    className="rounded object-cover"
                  />
                </div>
                <div className="relative h-52 hidden md:block">
                  <Image
                    fill
                    src="/images/sec-three-img-four.jpg"
                    alt=""
                    className="rounded object-cover"
                  />
                </div>
                <div className="relative h-52 hidden md:block">
                  <Image
                    fill
                    src="/images/sec-three-img-five.jpg"
                    alt=""
                    className="rounded object-cover"
                  />
                </div>
                <div className="relative h-52 hidden md:block">
                  <Image
                    fill
                    src="/images/sec-three-img-six.jpg"
                    alt=""
                    className="rounded object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="relative max-h-fit hidden col-span-4 rounded-md overflow-hidden lg:block">
              <Image
                fill
                src="/images/section-three.png"
                alt=""
                className="w-full h-full object-cover object-left"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION FOUR */}
      <div className="bg-gray-100">
        <section className="flex items-center px-5 py-20 lg:min-h-screen max-w-7xl mx-auto overflow-hidden">
          <div>
            <h3 className="text-navy-blue flex items-center justify-center gap-2 text-3xl text-center mb-5">
              <Number>3</Number> MiMall Kreation
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
              <div className="col-span-12 md:col-span-8">
                <div className="text-justify bg-navy-blue text-white p-5 md:text-xl rounded">
                  <span className="text-orange-500">a.</span> We give your
                  business competitive advantage with our amazing graphic
                  designs, artworks, branding and bulk SMS services.
                </div>
              </div>
            </div>
            <div className="grid grid-auto-fit-md gap-3 mt-5">
              <div className="relative h-52 rounded overflow-hidden">
                <Image
                  fill
                  src="/images/sec-four-img-one.jpg"
                  alt=""
                  className=" object-cover"
                />
              </div>
              <div className="relative h-52 rounded overflow-hidden">
                <Image
                  fill
                  src="/images/sec-four-img-two.jpg"
                  alt=""
                  className=" object-cover"
                />
              </div>
              <div className="relative h-52 rounded hidden md:block overflow-hidden">
                <Image
                  fill
                  src="/images/sec-four-img-three.jpg"
                  alt=""
                  className="object-cover"
                />
              </div>
              <div className="relative h-52 rounded hidden md:block overflow-hidden">
                <Image
                  fill
                  src="/images/sec-four-img-four.jpg"
                  alt=""
                  className="object-center object-cover"
                />
              </div>
              <div className="relative h-52 rounded hidden md:block overflow-hidden">
                <Image
                  fill
                  src="/images/sec-four-img-five.jpg"
                  alt=""
                  className="object-cover"
                />
              </div>
              <div className="relative h-52 rounded hidden md:block overflow-hidden">
                <Image
                  fill
                  src="/images/sec-four-img-six.jpg"
                  alt=""
                  className="object-cover"
                />
              </div>
              <div className="relative h-52 rounded hidden lg:block overflow-hidden">
                <Image
                  fill
                  src="/images/sec-four-img-seven.jpg"
                  alt=""
                  className="object-cover"
                />
              </div>
              <div className="relative h-52 rounded hidden lg:block overflow-hidden">
                <Image
                  fill
                  src="/images/sec-four-img-eight.jpg"
                  alt=""
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* SECTION FIVE */}
      <section className="flex items-center py-10 px-5 max-w-7xl mx-auto overflow-hidden">
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            <div className="relative max-h-fit hidden col-span-4 rounded-md overflow-hidden lg:block">
              <Image
                fill
                src="/images/section-five.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-span-12 md:col-span-8">
              <div className="text-justify bg-navy-blue text-white p-5 md:text-xl rounded">
                <span className="text-orange-500">b.</span> We serve you with
                the most juicy menus, funny videos and the most powerful
                motivational contents.
              </div>

              <div className="relative mt-5 h-96 overflow-hidden">
                <Image
                  fill
                  src="/images/sec-five-img-one.jpg"
                  alt=""
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION SIX */}
      <section className="bg-navy-blue py-10 space-y-5 px-5">
        <h3 className="text-orange-500 font-bold text-center text-3xl">
          TESTIMONIES
        </h3>
        <div className="max-w overflow-x-auto no-scrollbar">
          <div className="flex justify-start lg:justify-center gap-10">
            <div>
              <div className="relative w-60 h-60">
                <Image fill src="/images/testimonies-one.jpg" alt="" />
              </div>
              <div className="text-center text-white">
                <h3 className="font-bold">Ama Boateng</h3>
                <p>Level 300 B.ed Accounting</p>
                <p className="italic">"MiMall is good"</p>
              </div>
            </div>
            <div>
              <div className="relative w-60 h-60">
                <Image fill src="/images/testimonies-two.jpg" alt="" />
              </div>
              <div className="text-center text-white">
                <h3 className="font-bold">Kate Ackan</h3>
                <p>B.com Finance</p>
                <p className="italic">"MiHostels Hub..."</p>
              </div>
            </div>
            <div>
              <div className="relative w-60 h-60">
                <Image fill src="/images/testimonies-three.jpg" alt="" />
              </div>
              <div className="text-center text-white">
                <h3 className="font-bold">Mabel Boatemaa</h3>
                <p>Level 400 B.ed Accounting</p>
                <p className="italic">"MiMall Kreating is creative"</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION SEVEN */}
      <section className="bg-gray-100 py-10 px-5">
        <h3 className="text-orange-500 font-bold text-center text-3xl underline">
          PARTNERSHIP
        </h3>
        <div className="w-full overflow-x-auto no-scrollbar">
          <div className="flex justify-start md:justify-center gap-5 mt-10">
            <div className="relative basis-40 h-40 shrink-0 bg-white border shadow-md">
              <Image fill src="/images/ucc-src-logo.png" alt="" />
            </div>
            <div className="relative basis-40 h-40 shrink-0 bg-white border shadow-md">
              <Image fill src="/images/winike-dispatch.jpeg" alt="" />
            </div>
            <div className="relative basis-40 h-40 shrink-0  bg-white border shadow-md flex justify-center items-center">
              <h3 className="font-bold text-3xl">DC4C</h3>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION NINE */}
      <section className="bg-navy-blue py-10">
        <div className="">
          <h3 className="text-white font-bold text-center text-3xl underline">
            Let's get started...
          </h3>
          <div className="flex justify-center gap-x-5 gap-y-10 flex-wrap mt-10 px-5">
            <div className="w-[225px] h-96 flex flex-col gap-3">
              <h3 className="relative text-orange-500 text-xl text-center font-bold">
                MiMall eEasy coms
              </h3>
              <div className="relative flex-1">
                <Image
                  fill
                  src="/images/pexels-kindel-media-6868797.jpg"
                  alt=""
                  className="flex-1 object-cover object-top"
                />
              </div>
              <Link
                href="/delivery/winike-dispatch"
                className="font-bold text-xl bg-lime-500 text-white py-2 text-center"
              >
                Buy Now
              </Link>
            </div>

            <div className="w-[225px] h-96 flex flex-col gap-3">
              <h3 className="relative text-orange-500 text-xl text-center font-bold">
                MiHostel Hub
              </h3>
              <div className="relative flex-1 flex flex-col">
                <Image
                  fill
                  src="/images/sec-three-img-three.jpg"
                  alt=""
                  className="flex-1 object-cover object-top"
                />
              </div>
              <a
                href="https://t.me/mihostelshub"
                className="font-bold text-xl bg-lime-500 text-white py-2 text-center"
              >
                Visit Now
              </a>
            </div>

            <div className="w-[225px] h-96 flex flex-col gap-3">
              <h3 className="relative text-orange-500 text-xl text-center font-bold">
                MiMall Kreation
              </h3>
              <div className="relative flex-1 bg-white">
                <Image
                  fill
                  src="/images/kreation.png"
                  alt=""
                  className="flex-1 object-cover"
                />
              </div>
              <a
                href="https://t.me/mimallKreations"
                className="font-bold text-xl bg-lime-500 text-white py-2 text-center"
              >
                Visit Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* footer */}
      <div className="bg-[#12455e] text-center py-3 text-white">
        Powered by MiMall@2023
      </div>
    </main>
  );
};

function Number({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-navy-blue inline-block text-lg w-8 font-bold p-0.5 text-white rounded-full">
      {children}{" "}
    </span>
  );
}

export default Home;
