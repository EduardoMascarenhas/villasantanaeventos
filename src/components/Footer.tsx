import { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import Link from 'next/link';
import InstagramView from '../components/InstagramView';

const Footer: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [top, setTop] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    const el = document.querySelector('nav');
    if (el) {
      setTop(el.offsetTop);
      setHeight(el.offsetHeight);
    }

    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const scrollTopButton = document.getElementById('scroll-top');
    if (scrollTopButton) {
      if (scrollPosition > top) {
        scrollTopButton.classList.add('show');
      } else {
        scrollTopButton.classList.remove('show');
      }
    }
  }, [scrollPosition, top]);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div>
      {/*====================  footer area ====================*/}
      <div className="footer-area wine-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="footer-content-wrapper section-space--inner--50">
                <div className="row">
                  <div className="col-xl-3 col-lg-4 col-md-12 text-center">
                    {/* footer intro wrapper */}
                    <div className="footer-intro-wrapper">
                      <div className="footer-logo">
                        <Link href="/">
                          <img
                            src="/assets/img/logo/logo-footer.png"
                            className="img-fluid"
                            alt="Logo"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-2 col-lg-2 col-md-3 text-center">
                    {/* footer widget */}
                    <div className="footer-widget">
                      <h4 className="footer-widget__title">LINKS ÚTEIS</h4>
                      <ul className="footer-widget__navigation">
                        <li><Link href="/">Início</Link></li>
                        <li><Link href="/sobre-nos">Sobre Nós</Link></li>
                        <li><Link href="/contato">Contato</Link></li>
                        <li><Link href="/area-externa">Área Externa</Link></li>
                        <li><Link href="/salao-de-jogos">Salão de Jogos</Link></li>
                        <li><Link href="/auditorio">Auditorio</Link></li>
                        <li><Link href="/piscinas">Piscinas</Link></li>
                        <li><Link href="/restaurante">Restaurante</Link></li>
                        <li><Link href="/dormitorio">Dormitório</Link></li>
                        <li><Link href="/para-criancas">Para Crianças</Link></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-5 text-center">
                    {/* footer widget */}
                    <div className="footer-widget">
                      <h4 className="footer-widget__title">INSTAGRAM</h4>
                      <div className="footer-widget__content">
                        <InstagramView />
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-3 col-md-4 text-center">
                    {/* footer widget */}
                    <div className="footer-widget mb-0">
                      <h4 className="footer-widget__title">CONTATO</h4>
                      <div className="footer-widget__content">
                        <p className="address">
                          Avenida Frei Félix de Pacauba <br />
                          BR 116 - Norte <br />
                          Novo Horizonte, Feira de Santana - BA <br />
                        </p>
                        <ul className="contact-details footer-widget__navigation">
                          <h4>Tel:</h4>
                          <li>
                            <h5>(75) 9 9136 - 0241</h5>
                            <h5>(75) 9 9935 - 2006</h5>
                            <h5>(75) 9 8829 - 2006</h5>
                          </li>
                          <li>
                            <h4>Email:</h4>
                            <p>contato@villasantanaeventos.com.br</p>
                          </li>
                          <li>
                            <Link href="/contato">Ver no Mapa</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright-wrapper">
          <div className="footer-copyright text-center">
            Copyright © 2020. Desenvolvido pela{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://navegantesdigitais.com.br/"
            >
              Navegantes Digitais
            </a>
          </div>
        </div>
      </div>
      {/*====================  End of footer area  ====================*/}
      {/*====================  scroll top ====================*/}
      <button
        className="scroll-top"
        id="scroll-top"
        onClick={scrollToTop}
      >
        <i className="ion-android-arrow-up" />
      </button>
      {/*====================  End of scroll top  ====================*/}
    </div>
  );
};

export default Footer;
