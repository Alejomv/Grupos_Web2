
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import "./Members.css"


export function Members(){

let integrantes =[
    {Nombre:"Nick Mason ", Rol:"batería, percusión",Foto:"https://s3.sportstatics.com/relevo/www/multimedia/202211/14/media/cortadas/Sergio-Busquets-Burgos-Rg7FF0pLSVzlbLHGIuOFYvN-1200x648@Relevo.jpg?w=1200&h=648",id:1},
    {Nombre:"Rick Wright ", Rol:"Teclados",Foto:"https://firebasestorage.googleapis.com/v0/b/tiendasabadoamv.appspot.com/o/A-110861-1666820332-7557.jpg?alt=media&token=89fb0667-eb71-4537-be24-2e1323de1a77", Informacion:"Richard William Wright (Londres, 28 de julio de 1943 - ibidem, 15 de septiembre del 2008),1​ más conocido como Rick Wright o Richard Wright, fue un músico británico, teclista, cofundador y vocalista del grupo de rock progresivo Pink Floyd, del que además compuso varios temas.",id:1},
    {Nombre:"David Gilmour ", Rol:"Guitarra, voz líder",Foto:"https://firebasestorage.googleapis.com/v0/b/tiendasabadoamv.appspot.com/o/DavidGilmour.jpeg?alt=media&token=759ad7e4-6b87-4e20-913d-93084d59c38b", Informacion:"David Jon Gilmour (Cambridge, Reino Unido, 6 de marzo de 1946) es un músico, compositor y multiinstrumentista británico. Es conocido por haber sido vocalista, guitarrista y uno de los compositores de la banda de rock progresivo Pink Floyd, a la cual se unió poco antes del abandono de Syd Barrett en 1968. Junto con su trabajo en esta banda, Gilmour ha colaborado en otras publicaciones como productor y ha estado envuelto activamente en eventos benéficos a lo largo de su carrera.",id:1}
 
]


function quehagocuandosedeelevento(evento){
    
    (evento.target.classList.add("blancoynegro"))



}


function quehagocuandosedeotroevento(evento){
    
    (evento.target.classList.remove("blancoynegro"))



}

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
                <img src={integrante.Foto} alt="foto" className="img-fluid w-100 h-100" onMouseOver={quehagocuandosedeelevento} onMouseLeave={quehagocuandosedeotroevento}/>
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