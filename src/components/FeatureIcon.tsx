import React, { Component } from 'react';

class FeatureIcon extends Component {
  render() {
    let data = [
      {
        featureIcon: 'icon-estacionamento.png',
        featureTitle: 'Estacionamento',
      },
      {
        featureIcon: 'icon-kids.png',
        featureTitle: 'Ótimo para as crianças',
      },
      {
        featureIcon: 'icon-alojamento.png',
        featureTitle: 'Camas para até 520 pessoas',
      },
      {
        featureIcon: 'icon-wifi.png',
        featureTitle: 'Wifi Disponível',
      },
      {
        featureIcon: 'icon-acessibility.png',
        featureTitle: 'Acessível para cadeirantes',
      },
    ];

    let Datalist = data.map((val, i) => {
      return (
        <div
          className="col-lg-4 col-md-6 col-12 section-space--bottom--30"
          key={i}
        >
          <div className="feature">
            <div className="icon">
              <img
                src={`assets/img/icons/${val.featureIcon}`}
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="content">
              <h3>{val.featureTitle}</h3>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div>
        {/*Feature section start*/}
        <div
          className={`feature-section section-space--inner--100 `}
        >
          <div className="container">
            <div className="col-lg-12">
              <div className="feature-item-wrapper">
                <div className="row">{Datalist}</div>
              </div>
            </div>
          </div>
        </div>
        {/*Feature section end*/}
      </div>
    );
  }
}

export default FeatureIcon;
