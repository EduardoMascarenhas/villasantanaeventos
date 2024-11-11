import React, { Component } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import MobileMenu from '@/components/MobileMenu';
import GaleriaFotos from '../../components/GaleriaFotos';

const PROJECT_IMAGES = [
  "espaco-12.png",
  "espaco-49.png",
  "espaco-50.png",
  "espaco-51.png",
];

class SalaoJogos extends Component {
  render() {
    return (
      <div>
        {/* Navigation bar */}
        <NavBar />
        {/* breadcrumb */}
        {/*====================  breadcrumb area ====================*/}
        <div className="breadcrumb-area breadcrumb-bg-salao-jogos">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="page-banner text-center">
                  <h1>Salao de Jogos</h1>
                  <ul className="page-breadcrumb">
                    <li>
                      <a href="/">Voltar</a>
                    </li>
                    <li>
                      <a href="/contato">Agendar uma Data</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*====================  End of breadcrumb area  ====================*/}
        {/*====================  project details page content ====================*/}
        <div className="page-wrapper section-space--inner--120">
          {/*Projects section start*/}
          <span className="title-icon" />
          <div className="project-section">
            <div className="container">
              <div className="row">
                <div className="col-12 section-space--bottom--40">
                  <div className="project-image">
                    <img
                      src="assets/img/projects/projeto-detalhes.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-12">
                  <GaleriaFotos images={PROJECT_IMAGES} group='areaExterna'/>
                </div>
              </div>
            </div>
          </div>
          {/*Projects section end*/}
        </div>
        {/*====================  End of project details page content  ====================*/}
        {/* Footer */}
        <Footer />
        {/* Mobile Menu */}
        <MobileMenu />
      </div>
    );
  }
}

export default SalaoJogos;
