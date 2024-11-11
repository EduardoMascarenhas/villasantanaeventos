import React, { Component } from 'react';
import { LightgalleryProvider, LightgalleryItem } from 'react-lightgallery';

class GaleriaPiscinas extends Component {
  render() {
    /* project gallery image list */
    const PROJECT_IMAGES = [
      'espaco-31.png',
      'espaco-30.png',
      'espaco-29.png',
      'espaco-28.png',
      'espaco-27.png',
      'espaco-26.png',
      'espaco-25.png',
      'espaco-24.png',
      'espaco-23.png',
      'espaco-22.png',
      'espaco-21.png',
      'espaco-20.png',
      'espaco-19.png',
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

export default GaleriaPiscinas;
