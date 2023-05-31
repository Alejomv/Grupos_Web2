import { Route, Routes } from "react-router-dom"
import {Menu} from "../shared/Menu/Menu"
import { Home } from "../Home/Home"
import {Members} from "../Members/Members"
import { Footer } from "../shared/Footer/Footer"
import { Tienda} from "../Tienda/Tienda"
import { Formulario } from "../Formulario/Formulario"
import { Carga } from "../Hooks/Carga"
import { Musica } from "../Musica/Musica"



export function Rutas(){
    return(
        <>
        <Menu />
        
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/integrantes" element={<Members />} />  
        <Route path="/tienda" element={<Tienda />} />  
        <Route path="/formulario" element={<Formulario />} />  
        <Route path="/hook" element={<Carga />} />  
        <Route path="/musica" element={<Musica />} />  
        </Routes>
        <Footer></Footer>

    </>
    )
}