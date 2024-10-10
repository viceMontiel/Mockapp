import { createContext, useState, useEffect, useContext, ReactNode } from "react";
import { auth } from "../api/firebase.config";
import { signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup,
        createUserWithEmailAndPassword, signInWithEmailAndPassword, User } from "firebase/auth";

// Creación del contexto de autenticación
const AuthContext = createContext<any>(null);

// Hook para usar el contexto de autenticación
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("There is no Auth provider");
  return context;
};

// Proveedor de autenticación
interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null); // Acepta tanto User como null
  const [loading, setLoading] = useState(true);

  // Función de registro
  const signup = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Función de login
  const login = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const loginGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  // Función de logout
  const logout = () => signOut(auth);

  // Escuchar cambios en el estado de autenticación
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log({ currentUser });
      setUser(currentUser); // currentUser puede ser User o null
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // Proveer valores del contexto
  return (
    <AuthContext.Provider
      value={{
        signup,
        login,
        loginGoogle,
        user,
        logout,
        loading
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
