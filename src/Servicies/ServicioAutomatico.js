export async function GenerarToken() {
  try {
    const authEndpoint = 'https://accounts.spotify.com/api/token';
    const authBody = new URLSearchParams();
    authBody.append('grant_type', 'client_credentials');
    authBody.append('client_id', 'f4e5c04736b843ddbb9cf87f51e4adec');
    authBody.append('client_secret', '559c5931b58f419faf9496432af9bb37');

    const response = await fetch(authEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: authBody,
    });

    const data = await response.json();
    const accessToken = data.access_token;

    return accessToken;
  } catch (error) {
    console.error('Error al generar el token:', error);
    throw error;
    console.lo
  }
}


export async function consultarCanciones() {
  try {
    const accessToken = await GenerarToken();

    const IDARTISTA = '0k17h0D3J5VfsdmQ1iZtE9';
    const URI = `https://api.spotify.com/v1/artists/${IDARTISTA}/top-tracks?market=US`;

    let peticion = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };

    let respuesta = await fetch(URI, peticion);
    let canciones = await respuesta.json();
    return canciones;
  } catch (error) {
    console.error('Error al obtener las canciones:', error);
    throw error;
  }
}
