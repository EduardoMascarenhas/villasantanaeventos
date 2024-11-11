import React, { Component } from "react";
import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery";

class GaleriaSalaoJogos extends Component {
  render() {
    /* project gallery image list */
    const PROJECT_IMAGES = [
      "espaco-52.png",
      "espaco-53.png",
      "espaco-54.png",
      "espaco-55.png",
      "espaco-56.png",
    ];

    const PhotoItem = ({ image, group }) => (
      <div className="col-xl-3 col-lg-4 col-sm-6 col-12 section-space--top--10">
        <LightgalleryItem group={group} src={`assets/img/projects/${image}`}>
          <button className="gallery-item single-gallery-thumb">
            <img
              src={`assets/img/projects/${image}`}
              className="img-fluid"
              alt=""
            />
            <span className="plus" />
          </button>
        </LightgalleryItem>
      </div>
    );

    return (
      <div>
        <LightgalleryProvider>
          <div className="row row-5">
            {PROJECT_IMAGES.map((p, idx) => (
              <PhotoItem key={idx} image={p} group="group1" />
            ))}
          </div>
        </LightgalleryProvider>
      </div>
    );
  }
}

export default GaleriaSalaoJogos;
