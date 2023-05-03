
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import "./Members.css"

export function Members(){

let integrantes =[
    {Nombre:"Nick Mason ", Rol:"batería, percusión",Foto:"https://firebasestorage.googleapis.com/v0/b/tiendasabadoamv.appspot.com/o/nick-mason.jpg?alt=media&token=939bfc71-ae20-4345-b1e2-e0de9b59ec6f", Informacion:"Nicholas Berkeley Mason, CBE (Birmingham, Inglaterra; 27 de enero de 1944), más conocido como Nick Mason, es un músico, productor, escritor, baterista y piloto de automovilismo británico, reconocido por su trabajo en el grupo inglés de rock progresivo Pink Floyd. Mason ha escrito conjuntamente algunas de las composiciones más populares de Pink Floyd como «Echoes» y «Time». Mason es el único miembro de Pink Floyd presente en cada uno de sus álbumes. Se estima que hasta 2010, el grupo ha vendido más de 250 millones de discos en todo el mundo",id:1},
    {Nombre:"Rick Wright ", Rol:"Teclados",Foto:"https://firebasestorage.googleapis.com/v0/b/tiendasabadoamv.appspot.com/o/A-110861-1666820332-7557.jpg?alt=media&token=89fb0667-eb71-4537-be24-2e1323de1a77", Informacion:"Richard William Wright (Londres, 28 de julio de 1943 - ibidem, 15 de septiembre del 2008),1​ más conocido como Rick Wright o Richard Wright, fue un músico británico, teclista, cofundador y vocalista del grupo de rock progresivo Pink Floyd, del que además compuso varios temas.",id:1},
    {Nombre:"David Gilmour ", Rol:"Guitarra, voz líder",Foto:"https://firebasestorage.googleapis.com/v0/b/tiendasabadoamv.appspot.com/o/DavidGilmour.jpeg?alt=media&token=759ad7e4-6b87-4e20-913d-93084d59c38b", Informacion:"David Jon Gilmour (Cambridge, Reino Unido, 6 de marzo de 1946) es un músico, compositor y multiinstrumentista británico. Es conocido por haber sido vocalista, guitarrista y uno de los compositores de la banda de rock progresivo Pink Floyd, a la cual se unió poco antes del abandono de Syd Barrett en 1968. Junto con su trabajo en esta banda, Gilmour ha colaborado en otras publicaciones como productor y ha estado envuelto activamente en eventos benéficos a lo largo de su carrera.",id:1}
 
]

    return(
        <>


<div className="container">

<div className="row row-cols-1 row-cols-md-2 g-2">



    {integrantes.map(function(integrante){
        return(
            <>
          

            <div>
                <div className="card row row-cols-1 row-cols-md-1 g-1 ">
                <h2 className='text-center'>{integrante.Nombre}</h2>
                <img src={integrante.Foto} alt="foto" className="img-fluid w-100 h-100"/>
                <div>
                <p className='lead '>{integrante.Informacion}</p>
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