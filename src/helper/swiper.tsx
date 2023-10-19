import { Swiper } from "swiper/react";
import {
  Autoplay,
  Navigation,
  Pagination,
  EffectFade,
  Scrollbar,
} from "swiper";
import { SwiperOptions } from "swiper/types";
import { PropsWithChildren } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/bundle";
import "./swiper.css";

export default function Swipe(props: SwiperOptions & PropsWithChildren) {
  const pagination = {
    clickable: true,
  };

  const autoplay = {
    delay: 4000,
    disableOnInteraction: false,
  };

  return (
    <Swiper
      modules={[Navigation, EffectFade, Scrollbar, Autoplay, Pagination]}
      spaceBetween={props.spaceBetween || 0}
      effect={props.effect}
      slidesPerView={props.slidesPerView || 1}
      slidesPerGroup={props.slidesPerGroup || 1}
      navigation={props.navigation}
      autoplay={props.autoplay && autoplay}
      pagination={props.pagination && pagination}
      speed={1000}
      loop={props.loop}
      allowTouchMove={props.allowTouchMove}
    >
      {props.children}
    </Swiper>
  );
}
