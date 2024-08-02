import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h1>Sobre Nosotros</h1>
      <p>
        The Party Wagon o el Vagón Fiestero, en Español, surge del juego de palabras de combinar este precioso vehículo icónico Volkswagen y la Palabra Vagon, sustituyendo la V por la W. Es una marca fresca y divertida pensada con un tono informal y playero. Esperamos amenizar su fiesta o evento con nuestra oferta de coctelería, catering y sonido.
      </p>
      <Link to="/">
        <button>Regresar al Home</button>
      </Link>
    </div>
  );
}

export default About;

