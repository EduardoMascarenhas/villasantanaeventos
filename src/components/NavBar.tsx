import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import MobileMenu from './MobileMenu';

const NavBar: React.FC = () => {
  const [scroll, setScroll] = useState(0);
  const [top, setTop] = useState(0);
  const [height, setHeight] = useState(0);
  const mobileMenuElement = useRef<any>(null);

  const activeMobileMenu = () => {
    if (mobileMenuElement.current) {
      mobileMenuElement.current.toggleMobileMenu();
    }
  };

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    const el = document.querySelector('nav');
    if (el) {
      setTop(el.offsetTop);
      setHeight(el.offsetHeight);
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scroll > top) {
      document.body.style.paddingTop = `${height}px`;
    } else {
      document.body.style.paddingTop = '0px';
    }
  }, [scroll, top, height]);

  return (
    <div>
      <div
        className={`header-area header-sticky header-sticky--default ${
          scroll > top ? 'is-sticky' : ''
        }`}
      >
        <div className="header-area__desktop header-area__desktop--default">
          <div className="header-info-area">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-12">
                  <div className="header-info-wrapper align-items-center">
                    <div className="logo">
                      <Link href="/">
                        <img
                          src="/assets/img/logo/logo.png"
                          className="img-fluid"
                          alt="Logo"
                        />
                      </Link>
                    </div>
                    <div className="header-contact-info">
                      <div className="header-info-single-item">
                        <div className="header-info-single-item__icon">
                          <i className="zmdi zmdi-smartphone-android" />
                        </div>
                        <div className="header-info-single-item__content">
                          <h6 className="header-info-single-item__title">
                            Telefone
                          </h6>
                          <p className="header-info-single-item__subtitle">
                            (75) 9 9136 - 0241 <br />
                            (75) 9 9935 - 2006 <br />
                            (75) 9 8829 - 2006 <br />
                          </p>
                        </div>
                      </div>
                      <div className="header-info-single-item">
                        <div className="header-info-single-item__icon">
                          <i className="zmdi zmdi-home" />
                        </div>
                        <div className="header-info-single-item__content">
                          <h6 className="header-info-single-item__title">
                            Endereço
                          </h6>
                          <p className="header-info-single-item__subtitle">
                            Avenida Frei Félix de Pacauba <br />
                            BR 116 - Norte <br />
                            Novo Horizonte, Feira de Santana - BA <br />
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="mobile-navigation-icon"
                      id="mobile-menu-trigger"
                      onClick={activeMobileMenu}
                    >
                      <i />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="header-navigation-area default-bg">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="header-navigation header-navigation--header-default position-relative">
                    <div className="header-navigation__nav position-static">
                      <nav>
                        <ul>
                          <li>
                            <Link href="/"> INÍCIO </Link>
                          </li>
                          <li>
                            <Link href="/sobre-nos">SOBRE NÓS</Link>
                          </li>
                          <li className="has-children has-children--multilevel-submenu">
                            <Link href="#">O ESPAÇO</Link>
                            <ul className="submenu">
                              <li>
                                <Link href="/area-externa">Área Externa</Link>
                              </li>
                              <li>
                                <Link href="/salao-de-jogos">Salão de Jogos</Link>
                              </li>
                              <li>
                                <Link href="/auditorio">Auditório</Link>
                              </li>
                              <li>
                                <Link href="/piscinas">Piscinas</Link>
                              </li>
                              <li>
                                <Link href="/restaurante">Restaurante</Link>
                              </li>
                              <li>
                                <Link href="/dormitorio">Dormitório</Link>
                              </li>
                              <li>
                                <Link href="/para-criancas">Para Crianças</Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <Link href="/contato">CONTATO</Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MobileMenu ref={mobileMenuElement} />
    </div>
  );
};

export default NavBar;
