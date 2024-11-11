import Footer from '@/components/Footer';
import MobileMenu from '@/components/MobileMenu';
import NavBar from '@/components/NavBar';
import { Component } from 'react';
import GaleriaFotos from '../../components/GaleriaFotos';

const PROJECT_IMAGES = [
  "espaco-8.png",
  "espaco-9.png",
  "espaco-10.png",
  "espaco-11.png",
  "espaco-43.png",
  "espaco-44.png",
  "espaco-45.png",
  "espaco-58.png",
  "espaco-59.png",
];

class ParaCriancas extends Component {
  render() {
    return (
      <div>
        {/* Navigation bar */}
        <NavBar />
        {/* breadcrumb */}
        {/*====================  breadcrumb area ====================*/}
        <div className="breadcrumb-area breadcrumb-bg-criancas">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="page-banner text-center">
                  <h1>Para Criancas</h1>
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

export default ParaCriancas;
