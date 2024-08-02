import React from 'react';
import logo from '../assets/images/logo.png'; // Asegúrate de que esta ruta sea correcta
import '../assets/styles/banner.css';


const Banner = () => {
  const preventDownload = (event) => {
    event.preventDefault();
  }

  return (
    <div className="banner" onContextMenu={preventDownload}>
      <img src={logo} alt="The Party Wagon Logo" className="logo" onContextMenu={preventDownload} />
    </div>
  );
}

export default Banner;
