import Preparacion from "../components/Preparacion";
import './styles/Grilla.css';
import { useState } from "react";


type Dificultad = "fácil" | "medio" | "difícil" | "muy difícil";

// Definir el tipo de Receta
type Receta = {
  title: string;
  imagen: string;
  dificultad: Dificultad;
  ingredientes: string[];
};


function Preparaciones() {
  const [sortOption, setSortOption] = useState("default");
  const recetas: Receta[] = [
    { title: "capuccino", imagen: "https://img.freepik.com/premium-photo/cappuccino-white-background-cup-coffee-table_700081-1038.jpg", 
      dificultad: "fácil", ingredientes: ["Café", "Agua", "Leche"] },
    { title: "mokaccino", imagen: "https://es.cocktail.fabbri1905.com/imgpub/128752/0/0/ricetta_caff_mokaccino.jpg", 
      dificultad: "muy difícil", ingredientes: ["Café", "Agua", "Leche", "Salsa de Chocolate"] },
    { title: "espresso", imagen: "https://t4.ftcdn.net/jpg/01/21/98/71/360_F_121987125_Ojzn77KZ8ZLQuetdb1Wet4piHaia0TjF.jpg", 
      dificultad: "medio", ingredientes: ["Café", "Agua"] },
    { title: "espresso naranja", imagen: "https://img.freepik.com/premium-photo/bumble-coffee-with-orange-juice-espresso-americano-coffee-glass-isolated-white-background_503274-2322.jpg", 
      dificultad: "difícil", ingredientes: ["Café", "Agua", "Jugo de Naranja"] }
  ];

  // Función para ordenar las recetas según el criterio seleccionado
  const sortRecetas = (recetas: Receta[]) => {
    switch (sortOption) {
      case "alfabetico":
        return [...recetas].sort((a, b) => a.title.localeCompare(b.title));
        case "dificultad":
          const dificultadOrder: { [key in Dificultad]: number } = {
            "fácil": 1,
            "medio": 2,
            "difícil": 3,
            "muy difícil": 4
          };
          return [...recetas].sort((a, b) => dificultadOrder[a.dificultad] - dificultadOrder[b.dificultad]);
      case "ingredientes":
        return [...recetas].sort((a, b) => a.ingredientes.length - b.ingredientes.length);
      default:
        return recetas;
    }
  };

  return (
    <div className="content-preparaciones">
      <div className="sort-options">
        <label>Ordenar por: </label>
        <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
          <option value="default">Por defecto</option>
          <option value="alfabetico">Alfabéticamente</option>
          <option value="dificultad">Menor dificultad</option>
          <option value="ingredientes">Menor cantidad de ingredientes</option>
        </select>
      </div>
      <div className="content-grid">
        {sortRecetas(recetas).map((receta, index) => (
          <Preparacion
            key={index}
            title={receta.title}
            imagen={receta.imagen}
            dificultad={receta.dificultad}
            ingredientes={receta.ingredientes}
          />
        ))}
      </div>
    </div>
  );
}

export default Preparaciones;
