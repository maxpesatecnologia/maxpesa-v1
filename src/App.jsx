import { useState } from 'react'
import { BrowserRouter, Routes, Route, ScrollRestoration } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Splash from './components/Splash/Splash'

let splashShown = false
import Home        from './pages/Home/Home'
import Empresa     from './pages/Empresa/Empresa'
import Servicos    from './pages/Servicos/Servicos'
import Esg         from './pages/Esg/Esg'
import Certificacoes from './pages/Certificacoes/Certificacoes'
import Contato          from './pages/Contato/Contato'
import TrabalheConosco  from './pages/TrabalheConosco/TrabalheConosco'
import Frota            from './pages/Frota/Frota'
import Blog            from './pages/Blog/Blog'
import BlogPost        from './pages/Blog/BlogPost'

export default function App() {
  const [splashDone, setSplashDone] = useState(splashShown || window.location.pathname !== '/')

  return (
    <>
      {!splashDone && <Splash onDone={() => { splashShown = true; setSplashDone(true) }} />}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index          element={<Home />} />
          <Route path="empresa" element={<Empresa />} />
          <Route path="servicos" element={<Servicos />} />
          <Route path="esg"     element={<Esg />} />
          <Route path="certificacoes" element={<Certificacoes />} />
          <Route path="blog"         element={<Blog />} />
          <Route path="blog/:slug"   element={<BlogPost />} />
          <Route path="contato" element={<Contato />} />
          <Route path="trabalhe-conosco" element={<TrabalheConosco />} />
          <Route path="frota"           element={<Frota />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}
