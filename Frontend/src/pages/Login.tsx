import './styles/Form.css';
import './styles/General.css';
import google from '../assets/google.png'
import { useAuth } from '../context/AuthContext';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { login, loginGoogle } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    handleFirebaseError(error);
    try {
      await login(user.email, user.password);
      navigate("/"); // Redirigir al home después de iniciar sesión
    } catch (error: any) {
      handleFirebaseError(error);
    }
  };

  const handleGoogle = async () => {
    try {
      await loginGoogle();
      navigate("/");
    } catch (error: any) {
      handleFirebaseError(error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value, // Actualiza el estado del input
    });
  };

  const handleRegister = () => {
    navigate("/register");
  }

    // Función para manejar errores de Firebase
  const handleFirebaseError = (error: any) => {
    console.log(error)
    switch (error.code) {
      case "auth/user-not-found":
        setError("El correo no está registrado.");
        break;
      case "auth/wrong-password":
        setError("Contraseña incorrecta.");
        break;
      case "auth/invalid-email":
        setError("Correo inválido.");
        break;
      case "auth/too-many-requests":
        setError("Demasiados intentos fallidos. Intenta más tarde.");
        break;
      case "auth/invalid-credential":
        setError("Correo o contraseña inválida. Intentalo de nuevo");
        break;
      default:
        setError("Ocurrió un error inesperado. Inténtalo de nuevo.");
    }
  };

  return (
    <div className="gen1">
      <h1>Iniciar Sesión</h1>
      <div className='error' style={{ display: error ? "block" : "none" }}> 
          {error && <p>{error}</p>} {/* Mostrar error personalizado */}
      </div>
      
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="alguien@example.com"
          value={user.email}
          onChange={handleChange} // Controlar el input del email
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={user.password}
          onChange={handleChange} // Controlar el input de la contraseña
          required
        />
        <button type="submit">Iniciar Sesión</button>
        <p className='registro' onClick={handleRegister}>¿No tienes una cuenta? Regístrate aquí</p>
      </form>
      <div className='content1' onClick={handleGoogle}>
        <div className='opt1'>
          <img src={google}/> 
          
          <button>
            Iniciar con Google
          </button>
        </div>
      </div>
      
      
    </div>
  );
}

export default Login;