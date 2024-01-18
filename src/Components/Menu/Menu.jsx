import { Link } from 'react-router-dom'
// import { MenuLink } from '../MenuLink/MenuLink'
import './Menu.css'

export const Menu = () => {
    return (
        <div className='navBar'>
            <h2><span className='nome1'>Egrinaldo</span> <span className='nome2'>Ferreira</span></h2>
            <nav className='navMenu'>
                <ul className='navUl'>
                    <li><Link to="/" className='navUlList'>Inicio</Link></li>
                    <li><Link to="/projeto" className='navUlList'>Projetos</Link></li>
                    <li><Link to="/aperfeicoamento" className='navUlList'>Aperfeiçoamentos</Link></li>
                    <li><Link to="/contato" className='navUlList'>Contato</Link></li>
                </ul>
            </nav>
            <Link to="/contato" className='iconEmailLink'><img className='iconEmail' src="./img/icons8-nova-mensagem-100.png" alt="" /></Link>
            
        </div>
    )
}