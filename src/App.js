import React from 'react';

import { AboutUs, Chef, FindUs,    Header,  Intro,  SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
   
  
    <FindUs />
    
  </div>
);

export default App;
