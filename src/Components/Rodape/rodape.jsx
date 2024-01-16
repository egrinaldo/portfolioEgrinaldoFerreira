import './rodape.css'

export const Rodape = () => {
    return(
        <div className='rodapeGeral'>
            <section className='rodapeSec1'>
                <div className='rodapeText'>
                    <h2 className='rodapeH'>Vamos trabalhar juntos em algo incrível <span className='rodapeGreen'>?</span></h2>
                    <h2 className='rodapeH'>Comece Dizendo <span className='rodapeGreen'>Oi</span></h2>
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
                    <li>Inicio</li>
                    <li>Projetos</li>
                    <li>Aperfeiçoamentos</li>
                    <li>Contato</li>
                </ul>
                </div>
                <div className='rodapeImg'>
                    <img src="./img/image 36.png" alt="Linkedin" />
                    <img src="./img/image 37.png" alt="GitHub" />
                    <img src="./img/image 38.png" alt="Instagram" />
                </div>
                </div>
    
            </section>
        </div>
    )
}