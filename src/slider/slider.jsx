import React, { useRef } from "react";
import { Image } from "/src/elements";
import { SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import SwiperCore, { Navigation } from "swiper";
import { StyledSlider, SlyderWrapper, StyledButton } from "./styled";

function Slider({ images }) {
  SwiperCore.use([Navigation]);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <SlyderWrapper>
      <StyledButton left ref={navigationPrevRef} title="Назад">
        &lt;
      </StyledButton>
      <StyledButton right ref={navigationNextRef} title="Вперёд">
        &gt;
      </StyledButton>
      <StyledSlider
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current
        }}
        freeMode
        watchSlidesProgress
        slidesPerView={1}
        spaceBetween={20}
        loop
      >
        {images &&
          images.length &&
          images.map((image) => (
            <SwiperSlide key={image}>
              <Image
                src={image}
                alt="изображение продукта"
                width="200"
                height="257"
                maxWidth="200"
              />
            </SwiperSlide>
          ))}
      </StyledSlider>
    </SlyderWrapper>
  );
}

export default Slider;
