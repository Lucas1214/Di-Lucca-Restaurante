import React, {useState} from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
const [toggleMenu, setToggleMenu] = useState(false);


  return (
  <nav className= "app__navbar">
    <div className="app__navbar-logo">
    <img src={images.gericht} alt= "app logo" />
    </div>
      <ul className='app__navbar-links'>
        <li className="p__opensans"><a href="#home">Home</a></li>
        <li className="p__opensans"><a href="#about">Sobre</a></li>
        <li className="p__opensans"><a href="#menu">Menu</a></li>
        <li className="p__opensans"><a href="#awards">Prêmios</a></li>
        <li className="p__opensans"><a href="#contact">Contato</a></li>
      </ul>
    <div className='app__navbar-login'>
      <a href='#login' className='p__opensans'>Entre / Criar Conta</a>
      <div/>
      <a href="/" className='p__opensans'>Faça a Reserva</a>

    </div>
    <div className='app__navbar-smallscren'>
      <GiHamburgerMenu color="#9b0745c9" fontSize={27} onClick={() => setToggleMenu(true)}/>
    
    {toggleMenu &&  (
    <div  className="app__navbar-smallscren_overlay flex__center slide-bottom">
      <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} /> <ul className='app__navbar-smallscren_links'>
      
        < li className="p__opensans"><a href="#home">Home</a></ li>
        < li className="p__opensans"><a href="#about">Sobre</a></ li>
        < li className="p__opensans"><a href="#menu">Menu</a></ li>
        < li className="p__opensans"><a href="#awards">Prêmios</a></ li>
        < li className="p__opensans"><a href="#contact">Contato</a></ li>
      </ul>

      </div>
      )}

    </div>
  </nav>
 
)
    }

export default Navbar;
