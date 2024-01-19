import { Link } from 'react-router-dom'
import './AperfeiPag.css'

export const AperfeiPag = () => {
    return (
        <div className='aperfBase'>
            <section className='aperfBaseSec'>
                <div className='aperfBaseBloc2'>
                <div className='aperfGrad1'>
                <h2 className='aperfGrad1h2'>Desenvolvimento <span className='aperfGreen'>Web</span></h2>
                <h3 className='aperfGrad1h3'>Pós-Graduação -<span className='aperfGreen'>  IFSUL DE MINAS</span></h3>

                <img className='imgbloc' src="./img/tiny-young-male-software-developer-writing-code 1.png" alt="" />
                </div>

                <div  className='aperfGrad1'>
                    <h2 className='aperfGrad1h2'>Gestão <span className='aperfGreen'>Comercial</span></h2>
                    <h3 className='aperfGrad1h3'>Graduação -<span className='aperfGreen'> FGN</span></h3>

                <img className='imgbloc' src="./img/glare-startup-business-landing-page-isometric-rocket-1 1.png" alt="" />
                </div>

                </div>
                <div className='aperfBaseBloc1'>
                <h2 className='aperfBaseBloc1H'> Certificações</h2>
                <p className='aperfBaseBloc1P'>Cursos <span className='aperfGreen'>&</span> Graduções</p>
                <div className='aperfGrad2'>
                    <h2 className='aperfGrad2h2'>Análise e Desenvolvimento <span className='aperfGreen'>Sistemas</span></h2>
                    <h3 className='aperfGrad2h3'>Graduação -<span className='aperfGreen'> UNIFACS</span></h3>

                <img className='imgbloc' src="./img/haze-programmer-writing-code-on-laptop-1 1.png" alt="" />
                </div>
                <h3 className='aperfBaseBloc1HGreen'>+ Certificações</h3>
                <p className='aperfBase1P'>Para mais certificações <Link className='aperfBase1PGreen' to="https://www.linkedin.com/in/egrinaldojr/" target='_blank'>Linkedin</Link></p>
                </div>



            </section>
        </div>
    )
}