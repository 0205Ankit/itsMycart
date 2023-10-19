import { SwiperSlide } from "swiper/react";
import Swipe from "../helper/swiper";
import topItems from "../json/top20.json";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

export default function BestSellers() {
  return (
    <>
      <div className="w-10/12 mx-auto my-10">
        {/* --------------------------------------------------------------------------------------------- */}
        <div className="flex justify-between border-b-[1px] border-gray-300">
          <span className="text-2xl max-[1280px]:text-sm border-b-[2px] border-themeYellow py-3">
            Best Sellers
          </span>

          <div className="flex items-center gap-5 max-[800px]:gap-2 max-[800px]:text-xs font-xl font-light">
            <a
              href="#"
              className="rounded-3xl border-[2px] border-themeYellow px-3"
            >
              Top 20
            </a>
            <a href="#" className="text-gray-400 hover:text-themeText">
              Smartphones & Tablets
            </a>
            <a href="#" className="text-gray-400 hover:text-themeText">
              Laptop & Computers
            </a>
            <a href="#" className="text-gray-400 hover:text-themeText">
              Video Cameras
            </a>
          </div>
        </div>
        {/* --------------------------------------------------------------------------------------------- */}
        <div className="w-full">
          <Swipe
            slidesPerView={1}
            slidesPerGroup={1}
            navigation={false}
            loop={true}
            autoplay={false}
            pagination={true}
            allowTouchMove={true}
            spaceBetween={0}
          >
            {new Array(Math.ceil(topItems.data.length / 6))
              .fill(0)
              .map((_, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="flex flex-wrap py-10">
                      {topItems.data
                        .slice(index * 6, (index + 1) * 6)
                        .map((item, i) => {
                          return (
                            <div
                              key={i}
                              className="p-5 group innershadow-box dark:hover:bg-lightThemeDark items-center flex cursor-pointer gap-5 basis-[33%] max-[800px]:basis-[100%]"
                            >
                              <img src={item.img} className="w-[100px]" />
                              <div className="w-full">
                                <p className="text-xs font-light">
                                  {item.categories}
                                </p>
                                <p className="font-semibold text-blue-500 text-sm">
                                  {item.name}
                                </p>
                                <div className="flex justify-between items-center mt-5">
                                  {item.discountPrice ? (
                                    <div className="relative">
                                      <s className="text-xs text-gray-400 absolute top-[-50%] left-0">
                                        ${item.price}
                                      </s>
                                      <p className="text-xl font-light text-red-500">
                                        ${item.discountPrice}
                                      </p>
                                    </div>
                                  ) : (
                                    <p className="text-xl font-light ">
                                      ${item.price}
                                    </p>
                                  )}
                                  <a
                                    href="#"
                                    className="relative w-fit readmore"
                                  >
                                    <BsFillArrowRightCircleFill className="text-2xl fill-gray-200 group-hover:fill-themeYellow " />
                                  </a>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </SwiperSlide>
                );
              })}
          </Swipe>
        </div>
        <img src="https://electro.madrasthemes.com/wp-content/uploads/2018/04/home-v5-banner.png" />
      </div>
    </>
  );
}
