import React from 'react'
import {Link} from 'react-router-dom';
import BannerImage from '../assets/4930176.jpg';
import Hakkimizda from './Hakkimizda';
import Hizmetler from './Hizmetler';

function Home() {
  return (
    <div className='home' style={{backgroundImage:`url(${BannerImage})`}}>
        <div className='headerContainer'>
            <h1>BB</h1>
            <h5>Teknolojide Kadın Dokunuşu: </h5>
            <p> Etkileyici Tasarımlar, Güçlü Web Geliştirme, Sosyal Medyada Fark Yaratan Stratejiler!</p>
            <Link to="/iletisim">
            <button>İletişim</button>
            </Link>

        </div>
        <div>
            
           
        </div>
      
    </div>
  )
}

export default Home
