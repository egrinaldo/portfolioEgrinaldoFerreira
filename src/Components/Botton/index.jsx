import './button.css'
import toast, { Toaster } from 'react-hot-toast'

export const Button = (props) => {

    // const notif = () =>{
    //     toast.success('Mensagem Enviada com Sucesso!',{
    //         duration: 5000,
    //     }
    //     )}
    // onClick={notif}
    // <Toaster />

    return (
        <div>
            <button  className='buttonForm'>
            {props.texto}
            </button>
     
        </div>

    )
}