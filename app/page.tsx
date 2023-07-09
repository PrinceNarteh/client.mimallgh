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
      <section className="pt-5 h-[calc(100vh_-_68px)] max-w-7xl mx-auto overflow-hidden">
        <h2 className="text-center text-orange-500 text-3xl font-bold">
          WHAT WE DO
        </h2>
        <h3 className="text-navy-blue text-3xl text-center my-3">
          MiMall eEasy-coms
        </h3>
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-8">
            <div className="text-justify bg-navy-blue text-white p-5 text-xl rounded">
              We connect you to All food and food stuff vendors on UCC campus
              and other Top food vendors from Cape Coast! You buy from them! We
              DELIVER right to your door-step!
            </div>

            <div className="grid grid-auto-fit-md gap-3 mt-5">
              <img
                src="/images/sec-one-img-one.jpg"
                alt=""
                className="rounded"
              />
              <img
                src="/images/sec-one-img-two.jpg"
                alt=""
                className="rounded"
              />
              <img
                src="/images/sec-one-img-three.jpeg"
                alt=""
                className="rounded"
              />
              <img
                src="/images/sec-one-img-four.jpg"
                alt=""
                className="rounded"
              />
              <img
                src="/images/sec-one-img-five.jpg"
                alt=""
                className="rounded"
              />
              <img
                src="/images/sec-one-img-six.jpg"
                alt=""
                className="rounded"
              />
            </div>
          </div>
          <div className="col-span-4 rounded-md overflow-hidden">
            <img
              src="/images/pexels-kindel-media-6868797.jpg"
              alt=""
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
