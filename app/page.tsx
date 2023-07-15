import Link from "next/link";

const Home = () => {
  return (
    <main className="">
      <nav className="bg-navy-blue py-5">
        <div className="flex justify-between items-center px-10">
          <img src="/images/name-logo.png" alt="logo" className="h-5" />
          <ul className="flex gap-5 text-white text-lg">
            <li>
              <Link href="/">Home</Link>
            </li>

            <li>
              <Link href="/delivery/winike-dispatch">Delivery</Link>
            </li>
            <li>
              <Link href="/">Help</Link>
            </li>
          </ul>
        </div>
      </nav>
      {/* SECTION ONE */}
      <section className="p-5 min-h-[calc(100vh_-_68px)] max-w-7xl mx-auto overflow-hidden">
        <h2 className="text-center text-orange-500 text-3xl font-bold">
          WHAT WE DO
        </h2>
        <h3 className="text-navy-blue text-3xl text-center my-3">
          MiMall eEasy-coms
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          <div className="col-span-12 md:col-span-8">
            <div className="text-justify bg-navy-blue text-white p-5 md:text-xl rounded">
              We connect you to All food and food stuff vendors on UCC campus
              and other Top food vendors from Cape Coast! You buy from them! We
              DELIVER right to your door-step!
            </div>

            <div className="grid grid-auto-fit-md gap-3 mt-5">
              <div className="h-52 rounded overflow-hidden">
                <img
                  src="/images/sec-one-img-one.jpg"
                  alt=""
                  className="rounded object-cover"
                />
              </div>
              <div className="h-52 rounded overflow-hidden">
                <img
                  src="/images/sec-one-img-three.jpeg"
                  alt=""
                  className="rounded object-cover"
                />
              </div>
              <div className="h-52 rounded overflow-hidden">
                <img
                  src="/images/sec-one-img-two.jpg"
                  alt=""
                  className="hidden rounded object-cover md:block"
                />
              </div>
              <div className="h-52 rounded overflow-hidden">
                <img
                  src="/images/sec-one-img-four.jpg"
                  alt=""
                  className="hidden rounded object-cover md:block"
                />
              </div>
              <div className="h-52 rounded overflow-hidden">
                <img
                  src="/images/sec-one-img-five.jpg"
                  alt=""
                  className="hidden rounded object-cover lg:block"
                />
              </div>
              <div className="h-52 rounded overflow-hidden">
                <img
                  src="/images/sec-one-img-six.jpg"
                  alt=""
                  className="hidden rounded object-cover lg:block"
                />
              </div>
            </div>
          </div>
          <div className="max-h-fit hidden col-span-4 rounded-md overflow-hidden lg:block">
            <img
              src="/images/pexels-kindel-media-6868797.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* SECTION TWO */}
      <div className="bg-gray-100">
        <section className="flex items-center p-5 min-h-screen max-w-7xl mx-auto overflow-hidden">
          <div>
            <h3 className="text-navy-blue text-3xl text-center mb-10">
              MiMall eEasy-coms
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
              <div className="max-h-fit hidden col-span-4 rounded-md overflow-hidden lg:block">
                <img
                  src="/images/section-two.jpeg"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="col-span-12 md:col-span-8">
                <div className="text-justify bg-navy-blue text-white p-5 md:text-xl rounded">
                  b. We connect you to Top sellers in Fashion, Techs, Pharmacy,
                  etc. in and outside campus.
                </div>

                <div className="grid grid-auto-fit gap-3 mt-5">
                  <img
                    src="/images/sec-one-img-one.jpg"
                    alt=""
                    className="rounded object-cover"
                  />
                  <img
                    src="/images/sec-one-img-two.jpg"
                    alt=""
                    className="rounded object-cover"
                  />
                  <img
                    src="/images/sec-one-img-three.jpeg"
                    alt=""
                    className="hidden rounded object-cover md:block"
                  />
                  <img
                    src="/images/sec-one-img-four.jpg"
                    alt=""
                    className="hidden rounded object-cover md:block"
                  />
                  <img
                    src="/images/sec-one-img-five.jpg"
                    alt=""
                    className="hidden rounded object-cover lg:block"
                  />
                  <img
                    src="/images/sec-one-img-six.jpg"
                    alt=""
                    className="hidden rounded object-cover lg:block"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* SECTION THREE */}
      <section className="flex items-center p-5 min-h-screen max-w-7xl mx-auto overflow-hidden">
        <div>
          <h3 className="text-navy-blue text-3xl text-center mb-10">
            MiMall eEasy-coms
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            <div className="col-span-12 md:col-span-8">
              <div className="text-justify bg-navy-blue text-white p-5 md:text-xl rounded">
                b. We connect you to Top sellers in Fashion, Techs, Pharmacy,
                etc. in and outside campus.
              </div>

              <div className="grid grid-auto-fit gap-3 mt-5">
                <img
                  src="/images/sec-three-img-one.jpg"
                  alt=""
                  className="rounded object-cover"
                />
                <img
                  src="/images/sec-three-img-two.jpg"
                  alt=""
                  className="rounded object-cover"
                />
                <img
                  src="/images/sec-three-img-three.jpg"
                  alt=""
                  className="hidden rounded object-cover md:block"
                />
                <img
                  src="/images/sec-three-img-four.jpg"
                  alt=""
                  className="hidden rounded object-cover md:block"
                />
                <img
                  src="/images/sec-three-img-five.jpg"
                  alt=""
                  className="hidden rounded object-cover lg:block"
                />
                <img
                  src="/images/sec-three-img-six.jpg"
                  alt=""
                  className="hidden rounded object-cover lg:block"
                />
              </div>
            </div>
            <div className="max-h-fit hidden col-span-4 rounded-md overflow-hidden lg:block">
              <img
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
        <section className="flex items-center p-5 min-h-screen max-w-7xl mx-auto overflow-hidden">
          <div>
            <h3 className="text-navy-blue text-3xl text-center mb-10">
              MiMall eEasy-coms
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
              <div className="col-span-12 md:col-span-8">
                <div className="text-justify bg-navy-blue text-white p-5 md:text-xl rounded">
                  b. We connect you to Top sellers in Fashion, Techs, Pharmacy,
                  etc. in and outside campus.
                </div>
              </div>
            </div>
            <div className="grid grid-auto-fit-md gap-3 mt-5">
              <div className="h-52 rounded overflow-hidden">
                <img
                  src="/images/sec-four-img-one.jpg"
                  alt=""
                  className=" object-cover"
                />
              </div>
              <div className="h-52 rounded overflow-hidden">
                <img
                  src="/images/sec-four-img-two.jpg"
                  alt=""
                  className=" object-cover"
                />
              </div>
              <div className="h-52 rounded hidden md:block overflow-hidden">
                <img
                  src="/images/sec-four-img-three.jpg"
                  alt=""
                  className="object-cover"
                />
              </div>
              <div className="h-52 rounded hidden md:block overflow-hidden">
                <img
                  src="/images/sec-four-img-four.jpg"
                  alt=""
                  className="hidden  object-center object-cover md:block"
                />
              </div>
              <div className="h-52 rounded hidden md:block overflow-hidden">
                <img
                  src="/images/sec-four-img-five.jpg"
                  alt=""
                  className="hidden  object-cover lg:block"
                />
              </div>
              <div className="h-52 rounded hidden md:block overflow-hidden">
                <img
                  src="/images/sec-four-img-six.jpg"
                  alt=""
                  className="hidden  object-cover lg:block"
                />
              </div>
              <div className="h-52 rounded hidden lg:block overflow-hidden">
                <img
                  src="/images/sec-four-img-seven.jpg"
                  alt=""
                  className="hidden  object-cover lg:block"
                />
              </div>
              <div className="h-52 rounded hidden lg:block overflow-hidden">
                <img
                  src="/images/sec-four-img-eight.jpg"
                  alt=""
                  className="hidden  object-cover lg:block"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* SECTION FIVE */}
      <section className="flex items-center py-10 px-5 max-w-7xl mx-auto overflow-hidden">
        <div>
          <h3 className="text-navy-blue text-3xl text-center mb-10">
            MiMall eEasy-coms
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            <div className="max-h-fit hidden col-span-4 rounded-md overflow-hidden lg:block">
              <img
                src="/images/section-five.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-span-12 md:col-span-8">
              <div className="text-justify bg-navy-blue text-white p-5 md:text-xl rounded">
                b. We connect you to Top sellers in Fashion, Techs, Pharmacy,
                etc. in and outside campus.
              </div>

              <div className="mt-5 h-96 overflow-hidden">
                <img
                  src="/images/sec-five-img-one.jpg"
                  alt=""
                  className="object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
