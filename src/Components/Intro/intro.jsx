import './intro.css'

export const Intro = () => {
    return (
        <div>
            <div className='introd'>
            <section className='introdSec1'>
                <div className='designIntro'> 
                    <h3 className='designIntroH3'>Design 
                    <p className='designIntroP'>Criando Produtos digitais com ideias únicas.</p>
                    </h3>
                    <img className='imagenIntro' src="./img/icons8-design-100 1.png" alt="Imagem de um lapis e uma regua" />
                </div>
                <div className='designIntro'> 
                    <h3 className='designIntroH3'>Front-End
                    <p className='designIntroP'>Materializando pensamentos por meio da programação web</p>
                    </h3>
                    <img className='imagenIntro'  src="./img/image 4.png" alt="Imagem de um html" />
                </div>
                <div className='designIntro'> 
                    <h3 className='designIntroH3'>Gestão
                    <p className='designIntroP'>A gestão é sobre dar vida ás visões,
                     materializando-as através de planejamento eficaz e execução impecável.</p>
                    </h3>
                    <img className='imagenIntro'  src="./img/image 5.png" alt="Imagem de um homem" />
                </div>
            </section>

            <section className='introdSec2'>
                <h4>Introdução</h4>
                <h2>Saudações!</h2>
                <h2> Me chamo Egrinaldo Ferreira</h2>
                <h3>Aprendendo hoje para criar o futuro.</h3>
                <p>Desde o início da minha jornada como designer freelancer busco ser um especialista técnico em desenvolvimento web, também trago à mesa uma rica experiência em gestão de pessoas e processos.
                Tenho a convicção de que a comunicação eficaz e a gestão de processos são tão cruciais quanto a produção de um código limpo e eficiente. Acredito que essas habilidades me permitem criar soluções de alta qualidade que atendem às suas necessidades e superam as suas expectativas.</p>
            </section>
            </div>
            <section className='logoEmpTec'>
                <div className='logoEmpTecImg'>
                <img src="./img/image 6.png" alt="" />
                <img src="./img/image 7.png" alt="" />
                <img src="./img/image 8.png" alt="" />
                <img src="./img/image 9.png" alt="" />

                </div>
                <div className='logoEmpTecImg2'>
                <img src="./img/image 10.png" alt="" />
                <img src="./img/image 11.png" alt="" />
                </div>

            </section>
        </div>

    )
}