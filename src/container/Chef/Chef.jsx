import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg3 app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorants">Em que acreditamos</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">As mãos de um cozinheiro são como varinhas mágicas que transformam alimentos em sabores e momentos.</p>
          <img src={images.quote} alt="quote_image" /><br></br><br></br>
        </div>
        <p className="p__opensans"> Conhecido por sua iniciativa de revolucionar a alimentação nas escolas, Jamie é britânico e preza pelo uso de alimentos orgânicos e frescos. Começou sua carreira aos 16 anos, em uma escola de culinária em Westminster. Hoje é dono do Fifteen, em Londres, e uma cadeia de restaurantes italianos mundo afora, chamados “James´s Italian”. São mais de cinquenta unidades do estabelecimento; uma, inclusive, foi aberta em São Paulo em abril de 2015. </p>
      </div>

      <div className="app__chef-sign">
        <p>Jamie Lebraun</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;
