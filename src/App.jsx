import { RouterProvider } from 'react-router-dom'
import { router } from './Router/Router'
import './App.css'


export default App

function App() {

    return (
        <RouterProvider router={router}/>
    
    )

}


