import './styles/Form.css';
import './styles/General.css';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    confirmPassword: "", //  campo para confirmar la contraseña
  });
  
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setError("");

    // Validar que las contraseñas coincidan
    if (user.password !== user.confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    try {
      await signup(user.email, user.password);
      navigate("/");
    } catch (error: any) {
      handleFirebaseError(error);
    }
  };
  const handleLogin = () =>{
    navigate("/login");
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
      <h1>Registrarse</h1>
      <div className='error' style={{ display: error ? "block" : "none" }}> 
          {error && <p>{error}</p>} {/* Mostrar error personalizado */}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Confirma tu contraseña"
          value={user.confirmPassword}
          onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })}
          required
        />
        <button type="submit">Registrarse</button>
        <p className='registro' onClick={handleLogin}>¿Ya tienes cuenta? Inicia sesión aquí</p>
      </form>
      
    </div>
  );
}

export default Register;
