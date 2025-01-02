import { useNavigate } from 'react-router-dom'
import './styles/Card.css'



function Card({ title, imagen, ruta }: { title: string, imagen: string, ruta: string }) {
  const navigate = useNavigate();

  const dirigir =()=>{
    navigate(ruta); // Redirigir al home después de iniciar sesión
  }
  return (
    <div className="carta" onClick={dirigir}>
        <div className='img'>
            <img src={imagen} alt="" />
        </div>
        <span className='titulo'>{title}</span>
    </div>
  )
}

export default Card