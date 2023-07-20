import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Contact from "./components/contact";
// import Homepage from "./pages/homepage"
import { Pagination } from "swiper/modules";



function App() {
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-b from-blue-100">
        <section class=" text-gray-600 max-w-6xl pt-20 mx-auto body-font">
          <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 class="title-font sm:text-6xl text-3xl mb-4 font-bold text-gray-900">
                We Make
              </h1>
              <h3 class="title-font sm:text-4xl text-4xl mb-4 font-bold text-gray-800">
                Reading Easy
              </h3>
              <p class="mb-8 leading-relaxed">
                A tool to be plugged at any platform just pluggin and you are
                good to go! No more hurdles, Introducing a seamless reading
                experience be in your screen or shared screen via some app.
              </p>
              <p class="mb-8 leading-relaxed">We have got your back!</p>
              <div class="flex justify-center">
              <a href="https://reactnavigation.org/docs/link/" class="block font-semibold text-gray-900">
              <button class="inline-flex text-white bg-blue-600 border-0 rounded-full py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg  space-x-20 mx10">
                  GUI Version 
                </button>
              </a>
              <a href="" class="block font-semibold text-gray-900">
              <button class="inline-flex text-white bg-blue-500 border-0 rounded-full py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg space-x-20">
                  Chrome Extension 
                </button>
                        </a>
                
                
              </div>
            </div>
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                class="object-cover object-center rounded"
                alt="hero"
                src="https://pixelplex.io/wp-content/uploads/2021/01/how-do-blind-people-use-the-internet-main-1600.jpg"
                width={1000}
                height={900}
              />
            </div>
          </div>
        </section>
        <div className="max-w-6xl mt-5 mx-auto">
          <h2 class="title-font sm:text-5xl text-center text-3xl mb-4 font-bold text-gray-900">
            We Are Echo Eyes
          </h2>
        </div>
        <section class="text-gray-600 max-w-6xl mx-auto body-font">
          <div class="container px-5 py-24 mx-auto item-center flex flex-wrap">
            <div class="flex flex-wrap justify-center w-full">
              <div class="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
                <h1 className="text-3xl mb-20 font-bold">
                  How to use Echo Eyes?{" "}
                </h1>
                <div class="flex relative pb-12">
                  <div class="flex-grow pl-4">
                    <h2 class="font-bold title-font text-xl text-gray-900 mb-1 tracking-wider">
                     1. Join in to the meeting / classes
                    </h2>
                    <p class="leading-relaxed">
                      Ensure you are in full screen mode, then switch over to
                      Echo Eyes.
                    </p>
                  </div>
                </div>
                <div class="flex relative pb-12">
                  <div class="flex-grow pl-4">
                    <h2 class="font-bold title-font text-xl text-gray-900 mb-1 tracking-wider">
                     2. Just Press Echo Eyes
                    </h2>
                    <p class="leading-relaxed">
                      Move back to the previous application you were using. That's all!!
                    </p>
                  </div>
                </div>
                
              </div>
              <img
                class="lg:w-2/5 md:w-3/5 object-cover object-scaledown h-80 w-70 rounded-lg md:mt-0 mt-12"
                //src="https://www.globalgiving.org/pfil/39949/DSCN2611_Large.JPG"
                src="https://images.prismic.io/audioeye-web/6574ddf8-ea9b-4b3d-99cd-5d623a199271_What-Is-A-Screen-Reader-How-Do-They-Work-cover.jpg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&w=2619&h=1375"
                //src="https://cdn-site-assets.veed.io/Converter_Child_How_To_7af1f6d5f5_957ac6b690/Converter_Child_How_To_7af1f6d5f5_957ac6b690.webp?width=640&quality=75"
                alt="step"
              />
            </div>
          </div>
        </section>
        

        <div className="container mx-auto mb-10">
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="h-[40vh] shadow-6xl w-8/12 mx-auto">
                <img
                  src="https://www.globalgiving.org/pfil/39949/DSCN2611_Large.JPG"
                  class="object-fit h-48 w-96"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-[40vh] shadow-6xl w-8/12 mx-auto">
                <img
                  src="https://www.theiab.org/assets/images/career/career-computer-banner.jpg"
                  class="object-fit h-48 w-96"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-[40vh] shadow-6xl w-8/12 mx-auto">
                <img
                  src="https://www.theiab.org/assets/images/education.jpg"
                  class="object-fit h-48 w-96"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-[40vh] shadow-6xl w-8/12 mx-auto">
                <img
                  src="https://www.globalgiving.org/pfil/39949/DSCN2611_Large.JPG"
                  class="object-fit h-48 w-96"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-[40vh] shadow-6xl w-8/12 mx-auto">
                <img
                  src="https://www.globalgiving.org/pfil/39949/DSCN2611_Large.JPG"
                  class="object-fit h-48 w-96"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="mt-10">
          <Contact />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
