import Link from "next/link";
import BestBlogs from "./components/BestBlogs";
import ReviewCards from "./components/ReviewCards";
import TrendingProducts from "./components/TrendingProducts";

  const Homepage = () => (
    <div className="">
      <div
        className="relative min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/hero.png')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center text-white z-10">
          <div className="text-center px-6 md:px-16">
            <h1 className="text-5xl font-bold hero-text animate__animated animate__fadeIn animate__delay-1s mb-4">
              Explore the World of Ideas at{" "}
              <span className=" text-blue-500">
                B<span className=" text-white">logly</span>
              </span>
            </h1>
            <p className="text-xl mb-6">
              Dive into a space where curiosity meets creativity. From lifestyle
              and technology to inspiration and tips, our blog offers fresh
              perspectives on the topics that matter most. .
            </p>
            <Link href="/allblogs">
              <button className="px-6 py-3 bg-blue-900 text-white rounded-full hover:bg-blue-800 transition duration-300">
                See All Blogs
              </button>
            </Link>
          </div>
        </div>
      </div>
      <TrendingProducts/>
      <ReviewCards/>
      <BestBlogs />

  
   </div>
  );


export default Homepage;
