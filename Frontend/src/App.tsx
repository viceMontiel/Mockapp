import './App.css'
import styled from 'styled-components'
import { AuthProvider } from './context/AuthContext';
import MyRoutes from './routers/routes';


function App() {
  

  return (
    <AuthProvider>
          <MyRoutes />
    </AuthProvider>
  )
}
const  Container = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  display: flex;
`
export default App
