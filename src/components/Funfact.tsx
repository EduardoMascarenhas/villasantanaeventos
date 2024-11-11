import { useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import Image from 'next/image';

interface FunfactItem {
  img: string;
  countNum: number;
  countTitle: string;
}

const Funfact: React.FC = () => {
  const [didViewCountUp, setDidViewCountUp] = useState(false);

  const onVisibilityChange = (isVisible: boolean) => {
    if (isVisible) {
      setDidViewCountUp(true);
    }
  };

  const data: FunfactItem[] = [
    { img: 'funfact-project.png', countNum: 598, countTitle: 'Projetos' },
    { img: 'funfact-clients.png', countNum: 128, countTitle: 'Clientes' },
    { img: 'funfact-success.png', countNum: 128, countTitle: 'Casos de Sucesso' },
    { img: 'funfact-award.png', countNum: 109, countTitle: 'Certificados' },
  ];

  return (
    <div>
      {/*====================  fun fact area ====================*/}
      <div className="funfact-section section-space--inner--100 funfact-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="fun-fact-wrapper">
                <div className="row">
                  {data.map((val, i) => (
                    <div className="single-fact col-md-3 col-6 section-space--bottom--30" key={i}>
                      <Image src={`/assets/img/icons/${val.img}`} alt={val.countTitle} width={64} height={64} />
                      <h1 className="counter">
                        <VisibilitySensor
                          onChange={onVisibilityChange}
                          offset={{ top: 10 }}
                          delayedCall
                        >
                          <CountUp end={didViewCountUp ? val.countNum : 0} />
                        </VisibilitySensor>
                      </h1>
                      <h4>{val.countTitle}</h4>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*====================  End of fun fact area  ====================*/}
    </div>
  );
};

export default Funfact;
