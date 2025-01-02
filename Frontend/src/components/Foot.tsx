import './styles/Foot.css'
import github_photo from '../assets/github.png'
import { redirect } from 'react-router-dom';
function Foot() {

  

  return (
    <div className='contenido-foot'>
        <span>
          © 2024 ViceMontiel. Todos los derechos reservados.
        </span>
        <div className='logos'>
          <a href='https://github.com/viceMontiel' target="_blank">
            <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/vicente-montiel-torres-544862276/" target='_blank'>
            <img src="https://kirisama.com/wp-content/uploads/2023/04/linkedin-logo-black.png" alt="" />
          </a>
        </div>
        
        
    </div>
  )
}

export default Foot