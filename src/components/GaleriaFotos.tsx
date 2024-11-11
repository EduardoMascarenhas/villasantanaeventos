import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import dynamic from "next/dynamic";
import { LightgalleryItem } from "react-lightgallery";
import "lightgallery.js/dist/css/lightgallery.css"; // Importa os estilos do lightgallery

// Carrega o LightgalleryProvider dinamicamente no cliente
const LightgalleryProvider = dynamic(
  () => import("react-lightgallery").then((mod) => mod.LightgalleryProvider),
  { ssr: false }
);

const PhotoItem = ({ image, group }) => (
  <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
    <LightgalleryItem className="img-galeria-fotos" group={group} src={`/assets/img/projects/${image}`} thumb={`/assets/img/projects/${image}`}>
      <img src={`/assets/img/projects/${image}`} className="img-fluid " alt="Gallery item" />
    </LightgalleryItem>
  </div>
);

PhotoItem.propTypes = {
  image: PropTypes.string.isRequired,
  group: PropTypes.string.isRequired,
};

// Componente reutilizável GaleriaFotos
const GaleriaFotos = ({ images, group }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Garante que o componente será renderizado apenas no cliente
    setIsClient(true);
  }, []);

  return (
    <div className="container">
      {isClient && (
        <LightgalleryProvider
          onBeforeOpen={() => console.info("onBeforeOpen")}
          onAfterOpen={() => console.info("onAfterOpen")}
          onSlideItemLoad={() => console.info("onSlideItemLoad")}
          onBeforeSlide={() => console.info("onBeforeSlide")}
          onAfterSlide={() => console.info("onAfterSlide")}
          onBeforePrevSlide={() => console.info("onBeforePrevSlide")}
          onBeforeNextSlide={() => console.info("onBeforeNextSlide")}
          onDragstart={() => console.info("onDragstart")}
          onDragmove={() => console.info("onDragmove")}
          onDragend={() => console.info("onDragend")}
          onSlideClick={() => console.info("onSlideClick")}
          onBeforeClose={() => console.info("onBeforeClose")}
          onCloseAfter={() => console.info("onCloseAfter")}
        >
          <div className="row">
            {images.map((image, idx) => (
              <PhotoItem key={idx} image={image} group={group} />
            ))}
          </div>
        </LightgalleryProvider>
      )}
    </div>
  );
};

GaleriaFotos.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  group: PropTypes.string.isRequired,
};

export default GaleriaFotos;
