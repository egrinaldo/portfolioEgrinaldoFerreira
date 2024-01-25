import { Link } from 'react-router-dom'
import './form.css'
import emailjs from 'emailjs-com'
import { ImputTxT } from '../inputTexto/imputTxT'
import { TextArea } from '../inputTexto/textAr'
import { Button } from '../Botton'
import { useRef } from 'react'


export const Form = () => {

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmailMessage', 'template_9as58h9', form.current, '2xNo3p1NTSk0-1Goa')
      .then((result) => {
          alert('Mensagem Enviada Com Sucesso!');
      }, (error) => {
          alert(error.message);
      });
      e.target.reset();
  };

    return (
        <div className='formBase'>
            <div className='formBloc1'>
                <span className='formCont'> <img src="./img/o-email 1.png" alt="IMAGEM DE UMA CARTA" /> <Link to="mailto:egrinaldo19@gmail.com" className='formContLink'>Contato</Link></span>
                <h1 className='formH1'>VAMOS TRABALHAR <span className='formH1Green'> JUNTOS !</span></h1>
                <p className='formEmail'>egrinaldo19@gmail.com</p>
            </div>

            <section className='formBase2'>
                <form  ref={form} onSubmit={sendEmail}  className='formImputTxT'>
                
                    <ImputTxT required name='Nome' className='formImputLabel' place="Nome Completo" >Nome <span className='redStar'>*</span></ImputTxT>
                    <ImputTxT required name='Email' className='formImputLabel' place="Endereço de E-mail" >E-mail <span className='redStar'>*</span></ImputTxT>
                
             
                    <ImputTxT name='Telefone' className='formImputLabel' place='Telefone Para Contato'>Telefone <span className='obsId'> (opcional)</span></ImputTxT>
                    <ImputTxT name='URL-Figma' className='formImputLabel' place="URL - Link Figma" >Figma <span className='obsId'> (opcional)</span></ImputTxT>

                    <TextArea name="Mensagem" label="Mensagem" placeholder="Escreva sua mensagem aqui ..." />

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