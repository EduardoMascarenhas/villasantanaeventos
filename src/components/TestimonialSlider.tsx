import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';

const TestimonialSlider = () => {
  const data = [
    {
      testimonialImage: 'evandroJunior.png',
      testimonialName: 'Evandro Junior',
      testimonialText:
        'Ótimo lugar para eventos e confraternização, com excelente estrutura.',
    },
    {
      testimonialImage: 'samuelRamos.png',
      testimonialName: 'Samuel Ramos Santos',
      testimonialText:
        'Acredito que seja o maior e melhor espaço para eventos na região. Vale a pena se tiver muitas pessoas para levar. Cabem mais de 400 tranquilamente.',
    },
    {
      testimonialImage: 'adonayNunes.png',
      testimonialName: 'Adonay Nunes',
      testimonialText:
        'Muito bom. Área bem arejada. Área enorme das piscinas. Boa área de lazer.',
    },
  ];

  return (
    <div className="testimonial-slider-area testimonial-slider-area-bg section-space--inner--120">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <Swiper
              slidesPerView={1}
              loop
              speed={1000}
              effect="fade"
              autoplay={{ delay: 3000 }}
              pagination={{ clickable: true }}
              modules={[Autoplay, Pagination, EffectFade]}
              className="mySwiper"
            >
              {data.map((item, index) => (
                <SwiperSlide key={index} className="testimonial-slider__single-slide">
                  <div className="author">
                    <div className="author__image">
                      <img
                        src={`assets/img/testimonial/${item.testimonialImage}`}
                        alt={item.testimonialName}
                      />
                    </div>
                    <div className="author__details">
                      <h4 className="name">{item.testimonialName}</h4>
                    </div>
                  </div>
                  <div className="content">{item.testimonialText}</div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
