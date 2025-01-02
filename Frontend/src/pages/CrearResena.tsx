import { useState } from 'react';
import './styles/Form.css'
import NavBar from '../components/NavBar';

function CrearResena() {
  const [review, setReview] = useState({
    name: '',
    rating: 0,
    comment: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setReview({
      ...review,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí enviarías los datos de la reseña a tu backend o los guardarías en el estado
    console.log(review);
    alert('Reseña enviada');
  };

  return (

    <div>
      <NavBar />
      <h2>Deja tu Reseña</h2>
      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="titulo"
          id="titulo"
          placeholder="Título"
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="rating"
          id="rating"
          placeholder="Calificación de 1 a 5"
          max="5"
          min="1"
          onChange={handleChange}
          required
        />

        <textarea
          name="comment"
          id="comment"
          placeholder="Escribe tu comentario aquí..."
          onChange={handleChange}
          required
        />
        <button type="submit">Enviar Reseña</button>
      </form>
    </div>
  );
}

export default CrearResena;