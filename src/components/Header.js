import React from 'react'
import Logo from '../img/logo-white.svg';

const Header = ({ gridItems }) => (
  <section id="header">
 <div className="inner">
   <img className="logo" src={Logo} alt="Test" />
   <h1>A community designed to <strong>build</strong>, <strong>grow</strong>, and <strong>support</strong>
   <br /><strong> decentralized</strong> application development
   <br /> in the <strong>Music City</strong>.</h1>
   <p>Come code with us!</p>
   <ul className="actions">
     <li><a href="https://www.meetup.com/Nashville-Blockchain-Developers-Network" target="_blanl" className="button">Meetup</a></li>
   </ul>
 </div>
</section>
)

export default Header
