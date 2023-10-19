import { SwiperSlide } from "swiper/react";
import Swipe from "../helper/swiper";
import Poster1 from "./poster/Poster1";
import Poster3 from "./poster/Poster3";
import Poster2 from "./poster/Poster2";

export default function Poster() {
  return (
    <div className="poster dark:bg-themeWhite dark:text-themeText">
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
        <SwiperSlide>
          <Poster1 />
        </SwiperSlide>
        <SwiperSlide>
          <Poster2 />
        </SwiperSlide>
        <SwiperSlide>
          <Poster3 />
        </SwiperSlide>
      </Swipe>
    </div>
  );
}
