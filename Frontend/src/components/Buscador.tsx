import './styles/Buscador.css'
function Buscador() {
  return (
    <div className='busqueda'>
        <form action="">
            <input type="text" name="busqueda" placeholder='ej: mokaccino...' className='barra'/>
        </form>
        <div className='boton'>
            <button>Buscar</button>
        </div>
    </div>
  )
}

export default Buscador