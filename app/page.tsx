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
    </main>
  );
};

export default Home;
