import React from 'react';
import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg3  flex__center section__padding" id="about" >
  <div className="app__aboutus-overlay flex__center">
  <img src={images.G} alt="g letter"/>
  


  </div>
  <div className='app__aboutus-content flex__center'>
    <div className="app__aboutus-content_about">
    <h1 className='headtext__cormorants'>Sobre nós</h1>
    <img src={images.spoon} alt="about_spoon" className="spoon__img" />
    <p className='p__opensanss' 
    >A nossa experiência no mercado ascende a 8 anos e a nossa cozinha e sala de refeições estão equipadas com todos os dispositivos, mobiliário e acessórios necessários para satisfazer a todos os requisitos gastronômicos dos nossos clientes.</p>
    <button type='button' className='custom__buttonss'>Veja Mais</button>
    </div>

  <div className="app__aboutus-content_knife flex__center">
  <img src={images.knife} alt="about_knife"/>

  </div>
 
   <div className="app__aboutus-content_history">
    <h1 className='headtext__cormorants'>Sua Historia </h1>
    <img src={images.spoon} alt="about_spoon" className="spoon__img" />
    <p className='p__opensanss' 
    >O restaurante italiano mais tradicional da cidade de São Paulo foi fundado em 1881, no Largo do Paissandu, por Carlos Cecchini. O fundador manteve-se à frente do restaurante até 1949 quando passou a bola para seu amigo, e também toscano, Marcelo Gianni..</p>
    <button type='button' className='custom__buttonss'>Veja Mais</button>
    </div>

</div>
  </div>
 
);

export default AboutUs;
