import React, { Component } from 'react';
import ModalVideo from 'react-modal-video';

class VideoCta extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }
  render() {
    return (
      <div>
        {/*====================  video cta area ====================*/}
        <div className="video-cta-area section-space--inner--120">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <div className="video-cta-content">
                  <h4 className="video-cta-content__small-title">
                    Excelente Espaço para
                  </h4>
                  <h3 className="video-cta-content__title">
                    Eventos e Convenções
                  </h3>
                  <p className="video-cta-content__text">
                    A Villa Santana é o espaço ideal para a realização dos mais
                    variados tipos de eventos: casamentos, formaturas,
                    aniversários, congressos, atividades recreativas escolares,
                    encontros religiosos e eventos empresariais. Sua festa de
                    pequeno ou grande porte, shows, confraternizações ou feiras,
                    pode ser realizada num espaço adequado com toda
                    infraestrutura necessária. <br />
                    Confira no vídeo ao lado.
                  </p>
                  <a
                    href={`${process.env.PUBLIC_URL}/contato`}
                    className="ht-btn ht-btn--round"
                  >
                    Entre em Contato
                  </a>
                </div>
              </div>
              <div className="col-lg-5 offset-lg-1 col-md-6">
                <div className="cta-video-image">
                  <div className="video-popup">
                    <ModalVideo
                      channel="youtube"
                      isOpen={this.state.isOpen}
                      videoId="3vDGQcR42mU"
                      onClose={() => this.setState({ isOpen: false })}
                    />
                    <button onClick={this.openModal}>
                      <div className="cta-video-image__image">
                        <img
                          src="assets/img/backgrounds/video-cta.png"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="cta-video-image__icon">
                        <i className="ion-ios-play" />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*====================  End of video cta area  ====================*/}
      </div>
    );
  }
}

export default VideoCta;
