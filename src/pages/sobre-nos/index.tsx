import FeatureIcon from '@/components/FeatureIcon';
import Footer from '@/components/Footer';
import MobileMenu from '@/components/MobileMenu';
import NavBar from '@/components/NavBar';
import ProjectSliderTwo from '@/components/ProjectSliderTwo';
import { Component } from 'react';
import ModalVideo from 'react-modal-video';

class About extends Component {
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
        {/* Navigation bar */}
        <NavBar />

        {/* breadcrumb */}
        {/*====================  breadcrumb area ====================*/}
        <div className="breadcrumb-area breadcrumb-bg">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="page-banner text-center">
                  <h1>Sobre Nós</h1>
                  <ul className="page-breadcrumb">
                    <li>
                      <a href="/">Início</a>
                    </li>
                    <li>Sobre Nós</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*====================  End of breadcrumb area  ====================*/}

        <div className="page-wrapper section-space--inner--top--120">
          {/*About section start*/}
          <div className="about-section section-space--inner--bottom--120">
            <div className="container">
              <div className="row row-25 align-items-center">
                <div className="col-lg-6 col-12 mb-30">
                  <div className="about-image-two">
                    <img src="assets/img/backgrounds/video-cta.png" alt="" />
                    <span className="video-popup">
                      <ModalVideo
                        channel="youtube"
                        isOpen={this.state.isOpen}
                        videoId="3vDGQcR42mU"
                        onClose={() => this.setState({ isOpen: false })}
                      />
                      <button
                        className="cta-video-image__icon"
                        style={{ backgroundColor: '#d5a76c', padding: '0' }}
                        onClick={this.openModal}
                      >
                        <i className="ion-ios-play" />
                      </button>
                    </span>
                  </div>
                </div>
                <div className="col-lg-6 col-12 mb-30">
                  <div className="about-content-two">
                    <h3>Sejam bem vindos à</h3>
                    <h1>Villa Santana Eventos e Convenções</h1>
                    <h5>Estrutura Completa</h5>
                    <p>
                      Temos uma completa infraestrutura ao seu dispor: quartos
                      coletivos climatizados, campo de futebol gramado,
                      piscinas, parque infantil, quadra de vôlei de areia, salão
                      de jogos, auditório climatizado, restaurante com cozinha
                      industrial, área de festas com palco fixo, além de amplo
                      estacionamento.
                    </p>
                    <h5>Como funciona?</h5>
                    <p>
                      Aceitamos grupos em dias de lazer (day-use) das 8:00 as
                      17:00 horas.
                    </p>
                    <p>
                      Nosso espaço pode atender a demanda de grades eventos com
                      público superior a 4.000 pessoas. Possuímos 520 leitos em
                      quartos coletivos.
                    </p>
                    <p>
                      A Villa Santana foi idealizada para sua tranquilidade,
                      conforto, prazer, alegria e bem estar.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*About section end*/}

          {/* Feature Icon */}
          <FeatureIcon background="grey-bg" />

          {/* Project Slider */}
          <ProjectSliderTwo />
          <br></br>
        </div>

        {/* Footer */}
        <Footer />

        {/* Mobile Menu */}
        <MobileMenu />
      </div>
    );
  }
}

export default About;
