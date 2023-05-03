import './Menu.css';
import {Link} from 'react-router-dom'
export function Menu() {
  return (
    <>  

 <div>
    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" />
  <nav className="menu">
    <input type="checkbox" href="#" className="menu-open" name="menu-open" id="menu-open" />
    <label className="menu-open-button" htmlFor="menu-open">
      <span className="hamburger hamburger-1" />
      <span className="hamburger hamburger-2" />
      <span className="hamburger hamburger-3" />
    </label>
    <Link to="/integrantes" className="menu-item"> <i className="fa fa-users" /> </Link>
    <Link to="/tienda" className="menu-item"> <i className="fa fa-cart-plus" /> </Link>
    <Link to="/formulario"className="menu-item"> <i className="fa fa-heart" /> </Link>
    <Link to="/" className="menu-item"> <i className="fa fa-envelope" /> </Link>
    <Link to="/" className="menu-item"> <i className="fa fa-cog" /> </Link>
  </nav>
 
  
</div>
    </>
  )
}
3


    