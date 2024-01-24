import './button.css'
import toast, { Toaster } from 'react-hot-toast'

export const Button = (props) => {

    const notif = () =>{
        toast.success('Mensagem Enviada com Sucesso!',{
            duration: 5000,
        }
        )
        
    }

    return (
        <div>
            <button onClick={notif} className='buttonForm'>
            {props.texto}
            </button>
            <Toaster />
        </div>

    )
}