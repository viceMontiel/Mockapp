import { useAuth } from "../context/AuthContext";
import Buscador from "../components/Buscador";
import Foot from "../components/Foot";
import Card from "../components/Card";
//import cafe from '../assets/cafe1.jpg'
import resena from "../assets/ratatouille-crítico.jpeg"
import lectura from "../assets/disfrutando-lectura-cafe-vibraciones-otono-mesa-madera_60438-4003.avif"
import moca from "../assets/como-preparar-un-mocaccino.avif"
import barista from "../assets/desktop-wallpaper-barista.jpg"
import NavBar from "../components/NavBar";
import Preparaciones from "./Preparaciones";

export function Home() {
  const { logout, user } = useAuth();

  console.log(user.email);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error: any) {
      console.error(error.message);
    }
  };
  console.log(user);
  return (
    
    <div>
      <header>
        <NavBar/>
      </header>
      <main>
        <p>Bienvenido {user.displayName || user.email}!</p>
        <h1>En <span>MOCKAPP</span> encuentra tu café favorito</h1>
        <Buscador/>
        <div id='preparaciones'>
          <Preparaciones/>
        </div>
        
      </main>
      <footer id="fet">
        <Foot></Foot>
      </footer>
      {/*
      <div>
        <p>Bienvenido {user.displayName || user.email}</p>
        <button onClick={handleLogout}> Cerrar Sesión </button>
      </div>
      <h1>Busca tu café ideal</h1>
      <Buscador/>
      {/*<div className="opt2">
        {/*<Card title='Ver preparaciones' imagen={moca} ruta="/preparaciones" />
        <Card title="Crear reseña" imagen={resena} ruta="/crear-resena"/>
        <Card title="Reseñas de otros usuarios" imagen={lectura} ruta=""/>
        <Card title="Ver mis reseñas" imagen={barista} ruta=""/>
        <Preparaciones/>
      </div>
      <Preparaciones/>*/}
    </div>
  );
}

export default Home;