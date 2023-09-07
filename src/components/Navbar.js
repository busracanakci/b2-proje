import React from 'react'
import Logo from '../assets/logo.png';
import {Link} from 'react-router-dom';


function Navbar() {
  return (
    <div className='navbar'>
        <div className='leftSide'>
            <img src={Logo}/>
        </div>
        <div className='rightSide'>
            <Link to="/">Anasayfa</Link>
            <Link to="/hakkimizda">Hakkımızda</Link>
            <Link to="/hizmetlerimiz">Hizmetlerimiz</Link>
            <Link to="/iletisim">İletişim</Link>
        </div>
      
    </div>
  )
}

export default Navbar
