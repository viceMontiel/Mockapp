import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import './styles/Preparacion.css'
import Foot from '../components/Foot'
function DetallePreparacion() {
  const { title } = useParams<{ title: string }>();  // Toma el título de la URL

  const receta = [
    { title: "capuccino", imagen: "https://img.freepik.com/premium-photo/cappuccino-white-background-cup-coffee-table_700081-1038.jpg", 
        dificultad: "fácil", ingredients: ["Café", "Agua", "Leche"], steps: ["Paso 1", "Paso 2"] },
    { title: "mokaccino", imagen: "https://es.cocktail.fabbri1905.com/imgpub/128752/0/0/ricetta_caff_mokaccino.jpg", 
        dificultad: "muy dificil", ingredients: ["Café", "Agua", "Leche", "Salsa de Chocolate"], steps: ["Paso 1", "Paso 2"] },
    // Otras recetas...
  ];

  const recetaSeleccionada = receta.find(r => r.title === title);  // Busca la receta seleccionada

  if (!recetaSeleccionada) {
    return <div>Receta no encontrada</div>;
  }

  return (
    <div>
        <header>
          <NavBar/>
        </header>
        <main>
          <div className="receta">
            <div className="imagen">
              <img src={recetaSeleccionada.imagen} alt={recetaSeleccionada.title} />
            </div>
            <div className="contenido-principal">
              <span className="nombre">{recetaSeleccionada.title}</span>
              <div className="info">
                <div className="contenido-secundario">
                  <span className="level">Dificultad: {recetaSeleccionada.dificultad}</span>
                  <span className="level">Valoración: /5</span>
                </div>
                <div className="ingredientes">
                  <h2>Ingredientes:</h2>
                  <ul>
                      {recetaSeleccionada.ingredients.map((ing, index) => (
                      <li key={index}>{ing}</li>
                      ))}
                  </ul>
                </div>
                
              </div>
            </div>
          </div>

          <div className="receta-2">
            <span>Preparación:</span>
            <ol>
                {recetaSeleccionada.steps.map((step, index) => (
                <li key={index}>{step}</li>
                ))}
            </ol>
          </div>
          
        </main>
        <footer> <Foot/></footer>
    </div>
  );
}

export default DetallePreparacion;
