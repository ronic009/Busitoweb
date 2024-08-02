import React from 'react';
import { Link } from 'react-router-dom';
import Banner from './Banner';

const Home = () => {
  return (
    <div>
      <Banner />
      <h1>Welcome to The Party Wagon</h1>
      <nav>
        <ul>
          <li><Link to="/about">Sobre Nosotros</Link></li>
          <li><Link to="/contact">Contacto</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
