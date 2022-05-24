import React from 'react';
import { SubHeading} from '../../components';


import {images} from '../../constants';
import './Header.css';




const Header = () => (
<div className="app__header app__wrapper section__padding" id="home">
<div className="app__wrapper_info">
<SubHeading  title="Persiga um Novo Sabor!" />
<h1 className="app__header-h1">  A Chave Para um Bom Jantar!! </h1>
<p className="p__opensans" style={{ margin: '2rem 0'}}>Comer bem nunca foi tão fácil! Agora com o DI LUCCA na sua região você terá acessos a pratos deliciosos e um atendimento de deixar até a rainha da Inglaterra com inveja! Venha fazer uma visita e aproveitar essa maravilha com a gente!</p>
<button type="button" className="custom__buttonss">Explore Menu</button>
 </div>
<div className="app__wrapper_img">
<img src={images.welcome} alt="header img"/>
</div>
  </div> 

)


export default Header;
