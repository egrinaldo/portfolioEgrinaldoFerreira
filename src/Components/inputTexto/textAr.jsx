import './textAr.css'
export const TextArea = (props) => {


    return (
        <div className='ImputTxTBase'>
            <label htmlFor="">{props.label }</label>
            <textarea name="" id="" cols="30" rows="10" placeholder={props.placeholder} >{props.textarea}</textarea>
        </div>
    )
}