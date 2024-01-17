import { Link } from 'react-router-dom'
import './rodape.css'

export const Rodape = () => {
    return(
        <div className='rodapeGeral'>
            <section className='rodapeSec1'>
                <div className='rodapeText'>
                    <h2 className='rodapeH'>Vamos trabalhar juntos em algo incrível <span className='rodapeGreen'>?</span></h2>
                    <h2 className='rodapeH'>Comece Dizendo <Link to="/contato" className='rodapeGreen'>Oi</Link></h2>
                    <div className='rodapeBase'>
                    <h3><span className='nome1'>Egrinaldo</span> <span className='nome2'>Ferreira</span></h3>
                    <h3 className='rodapeReserved'>© 2024. All Rights Reserved</h3>
                    </div>

                </div>
                <div className='rodapeSec2'>
                    <h4>Informações</h4>
                    <h3>Lauro de Freitas - Bahia</h3>
                    <h2>egrinaldo19@gmail.com</h2>

                <div>
                <ul className='navUlFoot'>
                    <li><Link to="/" className='navUlFootList'>Inicio</Link></li>
                    <li><Link to="/projeto" className='navUlFootList'>Projetos</Link></li>
                    <li><Link to="/aperfeicoamento" className='navUlFootList'>Aperfeiçoamentos</Link></li>
                    <li><Link to="/contato" className='navUlFootList'>Contato</Link></li>
                </ul>
                </div>
                <div className='rodapeImg'>
                    <Link to="https://www.linkedin.com/in/egrinaldojr/" target='_blank'><img src="./img/image 36.png" alt="Linkedin" /></Link>
                    <Link to="https://github.com/egrinaldo" target='_blank'><img src="./img/image 37.png" alt="GitHub" /></Link>
                    <Link to="https://www.instagram.com/junior__sarmento/" target='_blank'><img src="./img/image 38.png" alt="Instagram" /></Link>
                </div>
                </div>
    
            </section>
        </div>
    )
}