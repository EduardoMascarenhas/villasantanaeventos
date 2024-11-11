import { useEffect, useState } from 'react';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Tipagem para os parâmetros do Swiper
interface SwiperParams {
  slidesPerView: number;
  loop: boolean;
  speed: number;
  navigation: boolean;
  autoplay: {
    delay: number;
  };
}

// Tipagem para os dados do slider
interface SliderData {
  bgImg: string;
  sliderTitle: string;
  sliderSubtitle: string;
  btnLink: string;
}

const HeroSliderThree: React.FC = () => {

  // Parâmetros do Swiper
  const params: SwiperParams = {
    slidesPerView: 1,
    loop: true,
    speed: 420,
    navigation: true,
    autoplay: {
      delay: 8400,
    },
  };

  // Dados do slider
  const data: SliderData[] = [
    {
      bgImg: 'img1.png',
      sliderTitle: 'Villa Santana',
      sliderSubtitle: 'Eventos e Convenções',
      btnLink: 'contato',
    },
    {
      bgImg: 'img2.png',
      sliderTitle: 'O local ideal para o seu evento',
      sliderSubtitle:
        'Com salão de jogos, campo de futebol gramado, quadra de vôlei de areia e muito mais!',
      btnLink: 'contato',
    },
    {
      bgImg: 'img3.png',
      sliderTitle: 'Espaço para Festas e Eventos',
      sliderSubtitle:
        'Avenida Frei Félix de Pacauba, Novo Horizonte, Feira de Santana - BA a 10 min da UEFS, ideal para sua festa de formatura!',
      btnLink: 'contato',
    },
    {
      bgImg: 'img4.png',
      sliderTitle: 'Tenha uma estadia relaxante',
      sliderSubtitle:
        'Na Villa Santana temos tudo de melhor para garantir o seu conforto. Dispomos de piscinas para crianças e adultos, salão de jogos, parque infantil, pula-pulas e muito mais.',
      btnLink: 'contato',
    },
    {
      bgImg: 'img5.png',
      sliderTitle: 'As crianças vão adorar',
      sliderSubtitle:
        'Equipado com parque infantil, piscinas e jogos lúdicos espalhados por todo o espaço, perfeito para festas infantis e eventos escolares.',
      btnLink: 'contato',
    },
  ];

  return (
    <Swiper  modules={[Navigation, Autoplay]} navigation={true} className="mySwiper">
      { data.map((val, i) => {
          return <SwiperSlide className="swiper-slide" key={i}>
          <div
            className="hero-slider__single-item"
            style={{ backgroundImage: `url(/assets/img/slider/${val.bgImg})` }}
          >
            <div className="hero-slider__content-wrapper">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="hero-slider__content m-auto text-center">
                      <h2 className="hero-slider__title">{val.sliderTitle}</h2>
                      <p className="hero-slider__text">{val.sliderSubtitle}</p>
                      <a href={`/${val.btnLink}`} className="hero-slider__btn hero-slider__btn--style2">
                          Entre em Contato
                        </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        })}
  </Swiper>
  );
};

export default HeroSliderThree;
