import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';

const ServiceGridSlider = () => {
  const data = [
    {
      img: 'service1.png',
      serviceTitle: 'Área Externa',
      serviceExcerpt:
        'Temos uma grande e agradável área externa, gramada e arborizada, ótimo para caminhadas e piqueniques compondo o cenário ideal para o seu evento.',
      serviceUrl: 'area-externa',
    },
    {
      img: 'service2.png',
      serviceTitle: 'Salão de Jogos',
      serviceExcerpt:
        'Se divirta com seus amigos em nosso salão de jogos, com sinuca, totó, pingue-pongue e muito mais!',
      serviceUrl: 'salao-de-jogos',
    },
    {
      img: 'service3.png',
      serviceTitle: 'Auditório',
      serviceExcerpt:
        'Auditório climatizado perfeito para apresentações musicais, teatrais, religiosas, cursos, congressos e eventos corporativos.',
      serviceUrl: 'auditorio',
    },
    {
      img: 'service4.png',
      serviceTitle: 'Piscinas',
      serviceExcerpt:
        'Área de piscina com piscinas de diversos tamanhos, para relaxar e se divertir com a família.',
      serviceUrl: 'piscinas',
    },
    {
      img: 'service5.png',
      serviceTitle: 'Restaurante',
      serviceExcerpt:
        'Restaurante amplo com enorme capacidade, equipado com cozinha industrial.',
      serviceUrl: 'restaurante',
    },
    {
      img: 'service6.png',
      serviceTitle: 'Dormitório',
      serviceExcerpt:
        'Dormitórios superiores acessíveis através de escada e rampa. Possuímos no total 520 leitos.',
      serviceUrl: 'dormitorio',
    },
  ];

  return (
    <div>
      <div className="service-slider-title-area grey-bg section-space--inner--bottom--50">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-area text-center">
                <h2 className="section-title mb-0">
                  O Espaço <span className="title-icon" />
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="service-grid-slider-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Swiper
                navigation
                modules={[Navigation, Autoplay]}
                autoplay={{ delay: 3000 }}
                loop
                speed={1000}
                spaceBetween={30}
                breakpoints={{
                  1499: { slidesPerView: 3 },
                  991: { slidesPerView: 2 },
                  767: { slidesPerView: 1 },
                  575: { slidesPerView: 1 },
                }}
                className="mySwiper"
              >
                {data.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="service-grid-item service-grid-item--style2">
                      <div className="service-grid-item__image">
                        <div className="service-grid-item__image-wrapper">
                          <a href={`/${item.serviceUrl}`}>
                            <img
                              src={`assets/img/service/${item.img}`}
                              className="img-fluid"
                              alt={item.serviceTitle}
                            />
                          </a>
                        </div>
                      </div>
                      <div className="service-grid-item__content">
                        <h3 className="title">
                          <a href={`/${item.serviceUrl}`}>
                            {item.serviceTitle}
                          </a>
                        </h3>
                        <p className="subtitle">{item.serviceExcerpt}</p>
                        <a
                          href={`/${item.serviceUrl}`}
                          className="see-more-link"
                        >
                          VER MAIS
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceGridSlider;
