import './Menu.css'
import { Link } from 'react-router-dom'
import Home from '../assets/home.svg'
import Contato from '../assets/contato.svg'
import Serviços from '../assets/service.svg'
import Sobre from '../assets/sobre.svg'
function Menu(){
    return (
        <section className='section-Menu'>
            <Link to="/"><img src={Home}/> Home</Link>
            <Link to="/Serviços"><img src={Serviços}/>Serviços</Link>
            <Link to="/Sobre"><img src={Sobre}/>Sobre Nos</Link>
            <Link to="/Contato"><img src={Contato}/>Contato</Link>
        </section>
    )
}
export default Menu