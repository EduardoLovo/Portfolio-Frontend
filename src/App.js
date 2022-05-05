import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header/Header';
import { JwtHandler } from './jwt-handler/jwt-handler';
import { AddCertificados } from './pages/Add/AddCertificados';
import { AddProjetcs } from './pages/Add/AddProjects';
import { AddStacks } from './pages/Add/AddStacks';
import { Adm } from './pages/Adm/Adm';
import { Certificados } from './pages/Certificados/Certificados';
import { Curriculo } from './pages/Curriculo/Curriculo';
import { Home } from './pages/Home/Home';
import { Informacoes } from './pages/Informacoes/Informacoes';
import { Login } from './pages/Login/Login';
import { Projetos } from './pages/Projetos/Projetos';
import { Qualificacoes } from './pages/Qualificacoes/Qualificacoes';

function App() {

  // const Navigate = useNavigate()
  const PrivateRoute = ({ children, redirectTo }) => {
    const isAuthenticated = JwtHandler.isJwtValid();
    console.log("isAuh:", isAuthenticated);
    return isAuthenticated ? children : <Navigate to={redirectTo} />
  };

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/certificados" element={<Certificados />} />
        <Route path="/qualificacoes" element={<Qualificacoes />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/info" element={<Informacoes />} />
        <Route path="/login" element={<Login />} />
        <Route path="/curriculo" element={<Curriculo />} />

        <Route
          path='/adm'
          element={
            <PrivateRoute redirectTo='/login'>
              <Adm />
            </PrivateRoute>
          }
        />

        <Route
          path="/add/certificados"
          element={
            <PrivateRoute redirectTo='/login'>
              <AddCertificados />
            </PrivateRoute>}
        />

        <Route
          path="/add/stacks"
          element={
            <PrivateRoute redirectTo='/login'>
              <AddStacks />
            </PrivateRoute>}
        />

        <Route
          path="/add/projects"
          element={
            <PrivateRoute redirectTo='/login'>
              <AddProjetcs />
            </PrivateRoute>}
        />

      </Routes>

    </div>
  );
}

export default App;
