import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/home";
import { Projeto } from "../pages/projeto";
import { Aperfeicoamento } from "../pages/aperfeicoamento";
import { Contato } from "../pages/contato";
import { Error404 } from "../pages/error404";




export const router = createBrowserRouter([
    {
        path:"/",
        element:<Home />
    },
    {
        path: "projeto",
        element: <Projeto />
    },
    {
        path: "aperfeicoamento",
        element:<Aperfeicoamento />
    },
    {
        path: "contato",
        element: <Contato />
    },
    {
        path: "*",
        element: <Error404 />
    }
  ]);