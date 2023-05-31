import { useState,useEffect } from "react"


export function Carga (){

const[estacargando,setEstaCargando]=useState(true)
const[tiempo,setTiempo]=useState(0)

useEffect(function(){
if(tiempo>0){
    setEstaCargando(false)}else{
        setEstaCargando(true)}

},[tiempo])

setTimeout(function(){

    setTiempo(1)
},5000)

 if (estacargando){return(
    <>
    <div className="container">
        <div className="row"></div>
        <div className="col">
            <h3>Estamos cargando</h3>

            <img src="../../src/assets/Guitarra.gif" alt="" className="img fluid mx-auto d-blook"/>


        </div>
    </div>
    
    </>
 )}else{
    return(
        <h2>Ya cargamos cualqueier vuelta </h2>
    )
 }
}