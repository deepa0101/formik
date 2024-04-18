import { NavLink } from "react-router-dom";
function NavbarComp() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-5">
  <NavLink className="navbar-brand" to="/dashBoard">Dashboard</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav px-3">
      <li className="nav-item px-3">
        <NavLink className="nav-link" to="/addBooks">Add Books</NavLink>
      </li>
    </ul>
  </div>
</nav>
  );
}

export default NavbarComp;