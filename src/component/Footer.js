import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Footer extends Component {
  static propTypes = {};

  render() {
    return (
      <>
        <div className="container">
          <footer
            className="sticky-bottom container pt-4"
            style={{ fontSize: 14 }}
          >
            <ul className="nav justify-content-center border-bottom-hidden">
              <li className="nav-item">
                <Link to="/about" className="nav-link px-2 text-muted">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/blogs" className="nav-link px-2 text-muted">
                  Blogs
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link px-2 text-muted">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/support" className="nav-link px-2 text-muted">
                  Support
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/faqs" className="nav-link px-2 text-muted">
                  FAQs
                </Link>
              </li>
            </ul>
            <hr />
            <p className="text-center text-danger">I ❤️ Club & Bar🍺</p>
            <p className="text-center text-muted">© 2022 - CLUB & BAR, Inc</p>
          </footer>
        </div>
      </>
    );
  }
}

export default Footer;
