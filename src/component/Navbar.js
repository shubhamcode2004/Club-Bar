import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  static propTypes = {};

  render() {
    return (
      <>
        <nav className="navbar navbar-dark bg-black sticky-top bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand text-light" to="/">
              CLUB & BAR
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasDarkNavbar"
              aria-controls="offcanvasDarkNavbar"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="offcanvas offcanvas-end text-bg-dark"
              tabIndex="-1"
              id="offcanvasDarkNavbar"
              aria-labelledby="offcanvasDarkNavbarLabel"
            >
              <div className="offcanvas-header">
                <h5
                  className="offcanvas-title text-light"
                  id="offcanvasDarkNavbarLabel"
                >
                  CLUB & BAR
                </h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li className="nav-item">
                    <Link
                      className="nav-link active text-success"
                      aria-current="page"
                      to="/login"
                    >
                      LOGIN / SIGNUP
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contact">
                      Contact
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/blogs">
                      Blog's
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <div className="location">
          <ul
            className="nav justify-content-center bg-body-secondary border-bottom"
            style={{ fontSize: 14 }}
          >
            <li className="nav-item">
              <Link className="nav-link text-danger" to="/pune">
                Pune
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-danger" to="/bengalure">
                Bengaluru
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-danger" to="/goa">
                Goa
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-danger" to="/mumbai">
                Mumbai
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-danger" to="/delhi">
                Delhi
              </Link>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default Navbar;
