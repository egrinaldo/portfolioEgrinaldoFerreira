import './imputTXT.css'

export const ImputTxT = (props) => {
    
    return (
        <div className='ImputTxTBase'>
            <label htmlFor="">{props.children }</label>
            <input type="text" placeholder={props.place}/>
        </div>
    )
}