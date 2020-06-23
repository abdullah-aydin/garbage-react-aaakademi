import React from "react";
import Swiper from "react-id-swiper";

const ResponsiveSwiper = ({children}) => {
  const params = {
    slidesPerView: 5,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      1024: {
        slidesPerView: 5,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      320: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
    },
  };

  return (
    <Swiper {...params}>
      {children}
    </Swiper>
  );
};

export default ResponsiveSwiper;
