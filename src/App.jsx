import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.jsx'
import Serviços from './Pages/Serviços.jsx'
import Sobre from './Pages/Sobre.jsx';
import Contato from './Pages/Contato.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Serviços" element={<Serviços/>}/>
        <Route path="/Sobre" element={<Sobre/>}/>
        <Route path="/Contato" element={<Contato/>}/>
      </Routes>
    </Router>
  )
}

export default App
