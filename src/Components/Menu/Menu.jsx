import './Menu.css'

export const Menu = () => {
    return (
        <div className='navBar'>
            <h2><span className='nome1'>Egrinaldo</span> <span className='nome2'>Ferreira</span></h2>
            <nav className='navMenu'>
                <ul className='navUl'>
                    <li>Inicio</li>
                    <li>Projetos</li>
                    <li>Aperfeiçoamentos</li>
                    <li>Contato</li>
                </ul>
            </nav>
            <img className='iconEmail' src="src/assets/img/image-removebg-preview (5) 1.png" alt="" />
        </div>
    )
}