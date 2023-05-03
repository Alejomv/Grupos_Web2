import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

export function Formulario(){

    return(

        <div className="container" >
<form>
  <div className="form-row">
    <div className="form-group col-md-6 mt-5">
      <label htmlFor="inputEmail4">Correo</label>
      <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
    </div>
    <div className="form-group col-md-6">
      <label htmlFor="inputPassword4">Contraseña</label>
      <input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
    </div>
  </div>
  <div className="form-group">
    <label htmlFor="inputAddress">Direccion</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
  </div>
  
  <div className="form-row">
    <div className="form-group col-md-6">
      <label htmlFor="inputCity">Ciudad</label>
      <input type="text" className="form-control" id="inputCity" />
    </div>
    <div className="form-group col-md-4">
      <label htmlFor="inputState">Estado</label>
      <select id="inputState" className="form-control">
        <option selected>Como te enteraste</option>
        <option>redes sociales</option>
        <option>Amigos</option>
        <option>Invitacion</option>
       
      </select>
    </div>
   
  </div>
  
  <button type="submit" className="btn btn-secondary">Enviar</button>
</form>

</div>

    )
}