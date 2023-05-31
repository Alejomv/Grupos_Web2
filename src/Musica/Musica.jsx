import { useState, useEffect } from "react";
import { GenerarToken, consultarCanciones } from "../Servicies/ServicioAutomatico";

export function Musica() {
  const [canciones, setCanciones] = useState(null);
  const [estacargando, setEstacargando] = useState(true);

  useEffect(function () {
    GenerarToken().then(function (accessToken) {
      consultarCanciones(accessToken).then(function (respuesta) {
        setCanciones(respuesta.tracks);
        setEstacargando(false);
        console.log(canciones);
      }).catch(function (error) {
        console.error("Error al obtener las canciones:", error);
        setEstacargando(false);
      });
    }).catch(function (error) {
      console.error("Error al generar el token:", error);
      setEstacargando(false);
    });
  }, []);

  if (estacargando) {
    return (
      <>
        {/* Mostrar un spinner de carga o mensaje de carga */}
      </>
    );
  } else {
    return (
      <>
        <h1>TOP 10</h1>
        <div className="container mt-5">
          <div className="row row-cols-1 row-cols-md-3">
            {canciones.map(function (cancion) {
              return (
                <div className="col" key={cancion.id} id="tarjeta">
                  <div className="card h-100 shadow text-center">
                    <h3>{cancion.name}</h3>
                    <img
                      src={cancion.album.images[0].url}
                      alt=""
                      className="img-fluid w-100"
                    />
                    <audio
                      controls
                      src={cancion.preview_url}
                      className="m-5 justify-center"
                    ></audio>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}
