

export async function consultarCanciones() {
  
  try {
    // Genera el token de acceso utilizando la función generarToken
    const accessToken = await generarToken();

    //RECETA PARA CONSUMIR APIS CON JS
    //PASO 1.  PA'ONDE VAS OME
    // URL + END POINT (EP) DEL SERVICIO
    const IDARTISTA = "0k17h0D3J5VfsdmQ1iZtE9";
    const URI = `https://api.spotify.com/v1/artists/${IDARTISTA}/top-tracks?market=US`;

    //PASO 2. QUE VAS A HACER ALLA OME....
    //CONFIGURAR LA PETICION
    let peticion = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`, // Utiliza el token de acceso generado
      },
    };

    //PASO 3. PIDA EL TAXI
    //Utiliza la promesa FETCH para ir al backend y consumir el API
    let respuesta = await fetch(URI, peticion);
    let canciones = await respuesta.json();
    return canciones;
  } catch (error) {
    console.error("Error al obtener las canciones:", error);
    throw error; // Lanza el error para que pueda ser manejado por el llamador de la función
  }
}
