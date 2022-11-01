const Dropdown = () => {
    return (
        <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          PLANES DE SALUD
        </a>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">Plan MA SUPRA</a></li>
          <li><a className="dropdown-item" href="#">Plan MB INTEGRAL</a></li>
          <li><a className="dropdown-item" href="#">Plan MC CLASSIC</a></li>
          <li><a className="dropdown-item" href="#">Planes MT</a></li>
        </ul>
      </li>
    );
}
export default Dropdown;
