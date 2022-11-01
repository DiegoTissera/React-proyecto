import './navbar.css'
import Dropdown from '../Dropdown/Dropdown';
import FormBusqueda from '../FromBusqueda/FormBusqueda';
const Navbar = () => {
    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">MET Medicina Privada</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <Dropdown/>
              <li className="nav-item">
                <a className="nav-link" href="#">PLAN CORPORATIVO</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><button type="button" class="btn btn-danger">Cart</button></a>
              </li>
            </ul>
            <FormBusqueda busqueda={"Buscar Planes"}/>
          </div>
        </div>
      </nav>
    );
}

export default Navbar;
