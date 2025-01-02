import './App.css'
import { AuthProvider } from './context/AuthContext';
import MyRoutes from './routers/routes';


function App() {
  

  return (
    <AuthProvider>
          <MyRoutes />
    </AuthProvider>
  )
}

export default App
