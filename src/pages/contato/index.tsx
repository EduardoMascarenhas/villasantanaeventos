import Footer from '@/components/Footer';
import MobileMenu from '@/components/MobileMenu';
import NavBar from '@/components/NavBar';
import { Component } from 'react';
class Contact extends Component {
  render() {
    return (
      <div>
        {/* Navigation bar */}
        <NavBar />

        {/* breadcrumb */}
        {/*====================  breadcrumb area ====================*/}
        <div className="breadcrumb-area breadcrumb-bg-contato">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="page-banner text-center">
                  <h1>Contato</h1>
                  <ul className="page-breadcrumb">
                    <li>
                      <a href="/">Início</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*====================  End of breadcrumb area  ====================*/}

        {/*====================  content page content ====================*/}
        <div className="page-wrapper section-space--inner--120">
          {/*Contact section start*/}
          <span className="title-icon" />
          <br></br>
          <div className="conact-section">
            <div className="container">
              <div className="row section-space--bottom--50">
                <div className="col">
                  <div className="contact-map">
                    <iframe
                      title="google-map"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10717.838336109267!2d-38.9675831473585!3d-12.155613832537517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcf0ae2cbbc62550e!2sVILLA%20SANTANA!5e0!3m2!1spt-BR!2sbr!4v1591051476719!5m2!1spt-BR!2sbr"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 col-12">
                  <div className="contact-information">
                    <h3>Informações de Contato</h3>
                    <ul>
                      <li>
                        <span className="icon">
                          <i className="ion-android-map" />
                        </span>
                        <span className="text">
                          <span>
                            BR 116, Norte <br></br>
                            FEIRA DE SANTANA - BA
                          </span>
                        </span>
                      </li>
                      <li>
                        <span className="icon">
                          <i className="ion-ios-telephone-outline" />
                        </span>
                        <span className="text">
                          <a href="tel:+5575991360241">(75) 9 9136-0241 </a>
                          <a href="tel:+5575991352006">(75) 9 9135-2006 </a>
                          <a href="tel:+5575988292006">(75) 9 8829-2006 </a>
                        </span>
                      </li>
                      <li>
                        <span className="icon">
                          <i className="ion-ios-email-outline" />
                        </span>
                        <span className="text">
                          <a href="mailto:contato@villasantanaeventos.com.br">
                            contato@villasantanaeventos.com.br
                          </a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-8 col-12">
                  <div className="contact-form">
                    <h3>Envie uma mensagem</h3>
                    <form id="contact-form">
                      <div className="row row-10">
                        <div className="col-md-6 col-12 section-space--bottom--20">
                          <input
                            name="con_name"
                            type="text"
                            placeholder="Nome"
                          />
                        </div>
                        <div className="col-md-6 col-12 section-space--bottom--20">
                          <input
                            name="con_email"
                            type="email"
                            placeholder="Email"
                          />
                        </div>
                        <div className="col-12">
                          <textarea
                            name="con_message"
                            placeholder="Sua Mensagem"
                            defaultValue={''}
                          />
                        </div>
                        <div className="col-12">
                          <button>Enviar Mensagem</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*Contact section end*/}
        </div>
        {/*====================  End of content page content  ====================*/}

        {/* Footer */}
        <Footer />

        {/* Mobile Menu */}
        <MobileMenu />
      </div>
    );
  }
}

export default Contact;
