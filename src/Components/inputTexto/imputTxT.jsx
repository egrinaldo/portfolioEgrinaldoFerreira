import './imputTXT.css'

export const ImputTxT = (props) => {
    
    return (
        <div className='ImputTxTBase'>
            <label  htmlFor="">{props.children }</label>
            <input type="text" required={props.required} name={props.name}  placeholder={props.place}/>
        </div>
    )
}