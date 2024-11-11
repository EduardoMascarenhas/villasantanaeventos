import Footer from '@/components/Footer';
import MobileMenu from '@/components/MobileMenu';
import NavBar from '@/components/NavBar';
import { Component } from 'react';
import GaleriaFotos from '../../components/GaleriaFotos';

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

class Restaurante extends Component {
  render() {
    return (
      <div>
        {/* Navigation bar */}
        <NavBar />
        {/* breadcrumb */}
        {/*====================  breadcrumb area ====================*/}
        <div className="breadcrumb-area breadcrumb-bg-restaurante">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="page-banner text-center">
                  <h1>Restaurante</h1>
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

export default Restaurante;
