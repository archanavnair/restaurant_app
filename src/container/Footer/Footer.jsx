import React from 'react'
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
 
  <div className="app__footer section__padding" id="login">
  <FooterOverlay />
  {/* <Newsletter /> */}

  <div className="app__footer-links">
    <div className="app__footer-links_contact">
      <h1 className="app__footer-headtext">Contact Us</h1>
      <p className="p__opensans">2270 markham Rd, Scarborough, ON M1B 2W4</p>
      <p className="p__opensans">+1 416-754-8188</p>
    </div>

    <div className="app__footer-links_logo">
      <img src={ images.app_logo } alt="Madame Saigon Logo" />
      <p className="p__opensans">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
      <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
      <div className="app__footer-links_icons">
        <FiFacebook />
        <FiTwitter />
        <FiInstagram />
      </div>
    </div>

    <div className="app__footer-links_work">
      <h1 className="app__footer-headtext">Working Hours</h1>
      <p className="p__opensans">Monday-Sunday:</p>
      <p className="p__opensans">11:00 am - 09:00 pm</p>
      {/* <p className="p__opensans">Saturday-Sunday:</p>
      <p className="p__opensans">07:00 am - 11:00 pm</p> */}
    </div>
  </div>

  <div className="footer__copyright">
    <p className="p__opensans">2024 Madame Saigon. All Rights reserved.</p>
  </div>

</div>
  
);

export default Footer
