import { Link } from 'react-router-dom'
import './form.css'
import { ImputTxT } from '../inputTexto/imputTxT'
import { TextArea } from '../inputTexto/textAr'
import { Button } from '../Botton'


export const Form = () => {
    return (
        <div className='formBase'>
            <div className='formBloc1'>
                <span className='formCont'> <img src="./img/o-email 1.png" alt="IMAGEM DE UMA CARTA" /> <Link to="mailto:egrinaldo19@gmail.com" className='formContLink'>Contato</Link></span>
                <h1 className='formH1'>VAMOS TRABALHAR <span className='formH1Green'> JUNTOS !</span></h1>
                <p className='formEmail'>egrinaldo19@gmail.com</p>
            </div>

            <section className='formBase2'>
                <form action=""  className='formImputTxT'>
                
                    <ImputTxT className='formImputLabel' place="Nome Completo" >Nome <span className='redStar'>*</span></ImputTxT>
                    <ImputTxT className='formImputLabel' place="Endereço de E-mail" >E-mail <span className='redStar'>*</span></ImputTxT>
                
             
                    <ImputTxT className='formImputLabel' place='Telefone Para Contato'>Telefone <span className='obsId'> (opcional)</span></ImputTxT>
                    <ImputTxT className='formImputLabel' place="URL - Link Figma" >Figma <span className='obsId'> (opcional)</span></ImputTxT>

                    <TextArea label="Mensagem" placeholder="Escreva sua mensagem aqui ..." />

                    <Button texto='Enviar' />
            
                </form>

            </section>

            {/* <div >
                <span className='formImputTxT'>
                    <ImputTxT label="Nome" placeholder="Nome Completo" />
                    <ImputTxT label="E-mail" placeholder="Endereço de E-mail" />
                </span>
                <span className='formImputTxT'>
                    <ImputTxT label="Telefone" placeholder='Telefone Para Contato'/>
                    <ImputTxT label="Figma" placeholder="Link Figma" />
                </span>

            </div> */}
        </div>
    )
}