import { useState,useEffect } from "react"


export function Hook(){

//Antes del retorno configuramos nuestras variables de estado

const[contador,setContador]=useState(0)

//function para decir que hacer cuando le den click al boton 

function incrementarCuenta(){

    setContador(contador+1)

}


//Programando el detector de ejecución

useEffect(function(){
    setContador(contador+1)
},[])

return(
    <>
    <div className="container">
        <div className="row">
            <div className="col">
                <button onClick={incrementarCuenta}>boton</button>
                <h2>
                    la cuenta va en: {contador}
                </h2>
            </div>
        </div>


    </div>
    </>
)
}