import { Link } from 'react-router-dom'
import './Projetos.css' 

export const Projetos = () => {
    return (
        <div className='projetoIni'>
        <section className='projetoSec'>
            <div className='projeto1'>
                <h2 className='projetoHGreen'>Últimos Trabalhos</h2>
                <p className='projetoPStyle'>Soluções <span className='projetoStyleGreen'>Web</span></p>
                <div className='projetoBloco'>
                    <div className='projetoGrade'>
                    <h2 className='projetoGradeH'>GameHub</h2>
                    <ul className='projetoGradeUl'>
                        <li className='projetoGradeUlLi'>React</li>
                        <li className='projetoGradeUlLi'>Node Js</li>
                        <li className='projetoGradeUlLi'>Html</li>
                    </ul>
                    </div>
                    <img src="./img/Rectangle 13.png" alt="" />
                </div>

                <h3 className='projetoGradeHBase'>+ Projetos</h3>
                <p className='projetoPStyle'>Para conhecer mais projetos entre em <Link to="/contato"  className='projetoPStyleLink'>Contato</Link></p>
            </div>




            <div className='projeto2'>
                <div className='projetoBloco'>
                <div className='projetoGrade'>
                    <h2 className='projetoGradeH'>GameHub</h2>
                    <ul className='projetoGradeUl'>
                        <li className='projetoGradeUlLi'>React</li>
                        <li className='projetoGradeUlLi'>Node Js</li>
                        <li className='projetoGradeUlLi'>Html</li>
                    </ul>
                    </div>
                    <img src="./img/Rectangle 13.png" alt="" />
                </div>
                <div className='projetoBloco'>
                <div className='projetoGrade'>
                    <h2 className='projetoGradeH'>GameHub</h2>
                    <ul className='projetoGradeUl'>
                        <li className='projetoGradeUlLi'>React</li>
                        <li className='projetoGradeUlLi'>Node Js</li>
                        <li className='projetoGradeUlLi'>Html</li>
                    </ul>
                    </div>
                    <img src="./img/Rectangle 13.png" alt="" />
                </div>
            </div>
        </section>
        </div>


    )
}