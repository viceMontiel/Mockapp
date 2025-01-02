import './styles/Card2.css'
import { Link } from 'react-router-dom'

function Preparacion({ title, imagen, dificultad, ingredientes }: { title: string, imagen: string, dificultad: string, ingredientes: string[] }) {
  return (
    <div className='item'>
        
            
                <div className="producto">
                    <div className="contenido">
                        <div className='info'>
                          <Link to={`/preparaciones/${title}`}>
                            <button>¡Ver Receta!</button>
                          </Link>
                          <p>valoracion: / 5</p>
                        </div>
                        <div className="imagen">
                          <img src={imagen} alt="" />
                        </div>
                        
                    </div>
                    <div className="titulos">
                        <span className="nombre">{title}</span>
                        <span className="level">Dificultad: {dificultad}</span>
                    </div>
                </div>
    </div>
    
  )
}

export default Preparacion