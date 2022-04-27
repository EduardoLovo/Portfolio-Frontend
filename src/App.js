import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header/Header';
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
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/certificados" element={<Certificados />} />
        <Route path="/qualificacoes" element={<Qualificacoes />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/info" element={<Informacoes />} />
        <Route path="/adm" element={<Adm />} />
        <Route path="/add/certificados" element={<AddCertificados />} />
        <Route path="/add/stacks" element={<AddStacks />} />
        <Route path="/add/projects" element={<AddProjetcs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/curriculo" element={<Curriculo />} />
      </Routes>

    </div>
  );
}

export default App;
