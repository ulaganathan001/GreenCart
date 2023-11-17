import React from 'react';
import './style.css'
const AdminNavbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-green" aria-label="Fourth navbar example">
        <div className="container-fluid">

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExample04">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Dashboard</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Customers</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Products</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Service</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Support</a>
              </li>
            </ul>
            <form className="d-flex search-form">
              <input className="form-control me-2" type="text" placeholder="Search" aria-label="Search"/>
            </form>
            
            {/ Add the "Welcome, Admin" tag to the right /}
            <span className="navbar-text ms-auto text-light">
              <strong>Welcome, Admin</strong>
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default AdminNavbar;