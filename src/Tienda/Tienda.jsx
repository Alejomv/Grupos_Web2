import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import "../helpers/productos"

export function Tienda(){

  let productos=Array(
    {
        nombre:"Libreta Pink Floyd",
        descripcion:"Inspirados en el icónico álbum de una de las bandas más representativas de la historia, Acme Studio diseñó un set de pluma y tarjetero de edición limitada, el cual fue presentado durante la feria NY NOW Accent on Design. Ambas piezas son protegidas con un empaque especial miniatura de la portada del álbum.",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasabadoamv.appspot.com/o/Libreta.jpg?alt=media&token=ec2fedb6-c0d2-4b4e-b3b7-a1c2186d2ed5","https://firebasestorage.googleapis.com/v0/b/tiendasabadoamv.appspot.com/o/Captura%20de%20pantalla%202023-04-30%20172816.png?alt=media&token=ef4c69d1-1074-4045-9111-95e44c0f37d2"],
        precio: 85000,
        popularidad:4.2
    },
    {
        nombre:"Copas Pink Floyd",
        descripcion:"Diseñados con [vidrio de alta calidad / materiales resistentes], estos vasos son perfectos para [usar en cualquier ocasión / añadir un toque de estilo a tu colección de vajilla]",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasabadoamv.appspot.com/o/Copas.jpg?alt=media&token=6b51fc84-ee1b-466e-9779-72739ebbcc86","https://firebasestorage.googleapis.com/v0/b/tiendasabadoamv.appspot.com/o/Copas.jpg?alt=media&token=6b51fc84-ee1b-466e-9779-72739ebbcc86"],
        precio:70000,
        popularidad:4.2
    },
    {
        nombre:"Manilla",
        descripcion:"¡Añade un toque de elegancia a cualquier outfit con esta manilla única y sofisticada! ",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasabadoamv.appspot.com/o/llavero.jpeg?alt=media&token=93737044-a19b-4fa2-9242-a54afa663666","https://firebasestorage.googleapis.com/v0/b/tiendasabadoamv.appspot.com/o/Manilla2.jpeg?alt=media&token=ef902373-6a8f-4bf8-a517-222e8dced650"],
        precio:70000,
        popularidad:4.2
    },
    {
        nombre:"Gorra Pink Floyd",
        descripcion:"¡Protege tu rostro del sol y muestra tu estilo con esta cachucha de alta calidad! ",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasabadoamv.appspot.com/o/gorra.png?alt=media&token=3069ea1f-628a-432b-9e6b-65e5693485f4","https://firebasestorage.googleapis.com/v0/b/tiendasabadoamv.appspot.com/o/gorra.jpg?alt=media&token=c75c178b-2790-4be0-af2f-4414fa51c973"],
        precio:70000,
        popularidad:4.2
    },
    {
        nombre:"Llavero",
        descripcion:"¡Lleva tus llaves con estilo con este llavero elegante y funcional! Diseñado con [materiales de alta calidad / aleación de metal resistente]",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasabadoamv.appspot.com/o/llaves.jpg?alt=media&token=0ca88f4f-865e-4751-9846-c353552c0e00","https://firebasestorage.googleapis.com/v0/b/tiendasabadoamv.appspot.com/o/llaves.jpg?alt=media&token=0ca88f4f-865e-4751-9846-c353552c0e00"],
        precio:70000,
        popularidad:4.2
    },

    {
        nombre:"Camisetas",
        descripcion:"¡Muestra tu estilo con esta camiseta única y cómoda! Diseñada con [materiales de alta calidad / algodón suave y transpirable]",
        fotos:["https://firebasestorage.googleapis.com/v0/b/tiendasabadoamv.appspot.com/o/Camiseta2.jpg?alt=media&token=00328869-e12c-4f45-b48b-63ae5d38b74a","https://firebasestorage.googleapis.com/v0/b/tiendasabadoamv.appspot.com/o/camiseta.png?alt=media&token=d6479a2e-355c-4569-a68b-88b7d4044ffe"],
        precio:70000,
        popularidad:4.2
    }
  )



  

 


    return(
        <>

<div className="container">

<div className="row row-cols-1 row-cols-md-2 g-2">



    {productos.map(function(producto){
        return(
            <>
          

            <div>
                <div className="card row row-cols-1 row-cols-md-1 g-1 ">
                <h2 className='text-center'>{producto.nombre}</h2>
                <img src={producto.fotos[0]} alt="foto" className="img-fluid w-100 h-100"/>
                <div>
                <p className='lead '>{producto.descripcion}</p>
                </div>
               

           

                </div>
                


                                    </div>
            
                                    </>
        )
        
    })}
       

</div>

</div>




        </>
    )
}