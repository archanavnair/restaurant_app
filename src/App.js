import React from 'react';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';


// https://images.squarespace-cdn.com/content/v1/6463d6dd088bd057dca02caf/5f6a97b2-cec0-4d7c-b6b5-0b57d6667d0d/MS+Logo+2023.jpg?format=1500w

const App = () => (
  <div>
    <Navbar />
    <Header />
    {/* <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer /> */}
  </div>
);

export default App;