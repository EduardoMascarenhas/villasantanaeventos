import React, { Component } from "react";
import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery";

class PhotoGallery extends Component {
  render() {
    /* project gallery image list */
    const PROJECT_IMAGES = [
      "espaco-1.png",
      "espaco-2.png",
      "espaco-3.png",
      "espaco-4.png",
      "espaco-5.png",
      "espaco-6.png",
      "espaco-7.png",
      "espaco-8.png",
      "espaco-9.png",
      "espaco-10.png",
      "espaco-11.png",
      "espaco-12.png",
      "espaco-13.png",
      "espaco-14.png",
      "espaco-15.png",
      "espaco-16.png",
      "espaco-17.png",
      "espaco-18.png",
      "espaco-19.png",
      "espaco-20.png",
      "espaco-21.png",
      "espaco-22.png",
      "espaco-23.png",
      "espaco-24.png",
      "espaco-25.png",
      "espaco-26.png",
      "espaco-27.png",
      "espaco-28.png",
      "espaco-29.png",
      "espaco-30.png",
      "espaco-31.png",
      "espaco-32.png",
      "espaco-33.png",
      "espaco-34.png",
      "espaco-35.png",
      "espaco-36.png",
      "espaco-37.png",
      "espaco-38.png",
      "espaco-39.png",
      "espaco-40.png",
      "espaco-41.png",
      "espaco-42.png",
      "espaco-43.png",
      "espaco-44.png",
      "espaco-45.png",
      "espaco-46.png",
      "espaco-47.png",
      "espaco-48.png",
      "espaco-49.png",
      "espaco-50.png",
      "espaco-51.png",
      "espaco-52.png",
      "espaco-53.png",
      "espaco-54.png",
      "espaco-55.png",
      "espaco-56.png",
      "espaco-57.png",
      "espaco-58.png",
      "espaco-59.png",
      "espaco-60.png",
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

export default PhotoGallery;
