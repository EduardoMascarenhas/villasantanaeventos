import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import Link from 'next/link';

const MobileMenu = forwardRef((props, ref) => {
  const [active, setActive] = useState(false);

  const toggleMobileMenu = () => {
    setActive(!active);
  };

  useImperativeHandle(ref, () => ({
    toggleMobileMenu,
  }));

  useEffect(() => {
    const offCanvasNav = document.getElementById('offcanvas-navigation');
    const offCanvasNavSubMenu = offCanvasNav?.querySelectorAll('.sub-menu');

    if (offCanvasNavSubMenu) {
      offCanvasNavSubMenu.forEach((subMenu) => {
        subMenu.insertAdjacentHTML(
          'beforebegin',
          "<span class='menu-expand'><i></i></span>"
        );
      });
    }

    const menuExpand = offCanvasNav?.querySelectorAll('.menu-expand');
    const sideMenuExpand = function (this: HTMLElement) {
      if (this.parentElement?.classList.contains('active')) {
        this.parentElement.classList.remove('active');
      } else {
        menuExpand?.forEach((expand) => {
          expand.parentElement?.classList.remove('active');
        });
        this.parentElement?.classList.add('active');
      }
    };

    menuExpand?.forEach((expand) => {
      expand.addEventListener('click', sideMenuExpand);
    });

    return () => {
      menuExpand?.forEach((expand) => {
        expand.removeEventListener('click', sideMenuExpand);
      });
    };
  }, []);

  return (
    <div>
      <div
        className={`offcanvas-mobile-menu ${active ? 'active' : ''}`}
        id="mobile-menu-overlay"
      >
        <a
          href="#/"
          className="offcanvas-menu-close"
          id="mobile-menu-close-trigger"
          onClick={toggleMobileMenu}
        >
          <i className="ion-android-close" />
        </a>
        <div className="offcanvas-wrapper">
          <div className="offcanvas-inner-content">
            <nav className="offcanvas-navigation" id="offcanvas-navigation">
              <ul>
                <li>
                  <Link href="/">INÍCIO</Link>
                </li>
                <li>
                  <Link href="/sobre-nos">SOBRE NÓS</Link>
                </li>
                <li className="menu-item-has-children">
                  <Link href="#">O ESPAÇO</Link>
                  <ul className="sub-menu">
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
            <div className="offcanvas-widget-area">
              <div className="off-canvas-contact-widget">
                <div className="header-contact-info">
                  <ul className="header-contact-info__list">
                    <li>
                      <i className="ion-android-phone-portrait" /> <br />
                      <a href="tel:+5575991360241">(75) 9 9136 - 0241</a> <br />
                      <a href="tel:+5575999352006">(75) 9 9935 - 2006</a> <br />
                      <a href="tel:+5575988292006">(75) 9 8829 - 2006</a>
                    </li>
                    <li>
                      <i className="ion-android-mail" />{' '}
                      <a href="mailto:contato@villasantanaeventos.com.br">
                        contato@villasantanaeventos.com.br
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="off-canvas-widget-social">
                <a
                  href="https://www.facebook.com/f.villasantana"
                  title="Facebook"
                >
                  <i className="fa fa-facebook" />
                </a>
                <a
                  href="https://www.instagram.com/villa.santana/"
                  title="Instagram"
                >
                  <i className="fa fa-instagram" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

MobileMenu.displayName = 'MobileMenu';

export default MobileMenu;
