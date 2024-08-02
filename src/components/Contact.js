import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:3001/send', formData)
      .then(response => {
        alert('Mensaje enviado!');
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      })
      .catch(error => {
        console.error('Error al enviar el mensaje:', error);
        alert('Error al enviar el mensaje. Inténtalo de nuevo más tarde.');
      });
  };

  return (
    <div>
      <h1>Contacto</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

        <label htmlFor="message">Mensaje:</label>
        <textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Contact;
