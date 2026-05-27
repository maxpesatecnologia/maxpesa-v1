import { BrowserRouter, Routes, Route, ScrollRestoration } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home        from './pages/Home/Home'
import Empresa     from './pages/Empresa/Empresa'
import Servicos    from './pages/Servicos/Servicos'
import Esg         from './pages/Esg/Esg'
import Certificacoes from './pages/Certificacoes/Certificacoes'
import Contato     from './pages/Contato/Contato'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index          element={<Home />} />
          <Route path="empresa" element={<Empresa />} />
          <Route path="servicos" element={<Servicos />} />
          <Route path="esg"     element={<Esg />} />
          <Route path="certificacoes" element={<Certificacoes />} />
          <Route path="contato" element={<Contato />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
