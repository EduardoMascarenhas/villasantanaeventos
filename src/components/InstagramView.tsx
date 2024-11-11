import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

const InstagramView = () => {
  const data = [
    { img: 'footer6.jpg' },
    { img: 'footer1.jpg' },
    { img: 'footer2.jpg' },
    { img: 'footer3.jpg' },
    { img: 'footer4.jpg' },
    { img: 'footer5.jpg' },
  ];

  return (
    <div>
      <Swiper
        slidesPerView={1}
        loop
        speed={1000}
        autoplay={{ delay: 3000 }}
        modules={[Autoplay]}
        breakpoints={{
          1499: { slidesPerView: 1 },
          991: { slidesPerView: 1 },
          767: { slidesPerView: 1 },
          575: { slidesPerView: 1 },
        }}
        className="mySwiper"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <img
              src={`assets/img/slider/${item.img}`}
              className="img-fluid"
              alt=""
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default InstagramView;
