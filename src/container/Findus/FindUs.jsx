import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';



const FindUs = () => (
  <div className="app__bg1 app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Onde Estamos</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans"> Av. Bartolomeu de Gusmão, nº. 187 Ponta da Praia - Santos - SP</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Horario Expediente</p>
        <p className="p__opensans">Seg - Sex: 10:00 Manhã - 02:00 Madrugada</p>
        <p className="p__opensans">Sab - DOM: 10:00 Manhã - 03:00 Manhã</p>
      </div>
      <button type="button" className="custom__buttonss" style={{ marginTop: '2rem' }}>Visite-nos</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="finus_img" />
    </div>
  </div>
);

export default FindUs;