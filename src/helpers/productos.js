/*import "./baseDatos"

export function Productos(productos)

let fila=document.getElementById("fila");

    
    productos.forEach(function(producto){
   
        
        let columna=document.createElement("div")
        columna.classList.add("col")
    
        
        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card","h-100","shadow")
    
        let imagen=document.createElement("img")
        imagen.classList.add("img-fluid","w-100")
        imagen.src=producto.fotos[0]
    
     
        let nombre=document.createElement("h3")
        nombre.classList.add("text-center")
        nombre.textContent=producto.nombre
    
       
        let precio=document.createElement("h5")
        precio.classList.add("text-center","text-success","fw-bold")
        precio.textContent="USD "+producto.precio

        let desc=document.createElement("p")
        precio.classList.add("text-center","fw-bold","d-none")
        precio.textContent=producto.descripcion
    
   
        
        tarjeta.appendChild(imagen)
        tarjeta.appendChild(nombre)
        tarjeta.appendChild(precio)
        tarjeta.appendChild(desc)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)
    
    
    })

*/
