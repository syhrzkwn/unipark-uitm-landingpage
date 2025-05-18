import { Link } from "react-router-dom";
import uniparkLogo from "../assets/img/unipark-logo.webp";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm py-1">
        <div className="container">
          <Link to="/">
            <img
              src={uniparkLogo}
              width="90px"
              className="me-2"
              alt="UniPark@UiTM Logo"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="{{ __('Toggle navigation') }}"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* <!-- Left Side Of Navbar --> */}
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link link-dark" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link link-dark" to="/#features">
                  Features
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link link-dark" to="/#technology">
                  Technology
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link link-dark" to="/limitation">
                  Limitation
                </Link>
              </li>
            </ul>

            {/* <!-- Right Side Of Navbar --> */}
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link
                  to="/how-to-use"
                  className="btn btn-light rounded-3 my-2 py-2 px-3 me-2"
                >
                  🤷🏻‍♂️ How to use
                </Link>
              </li>
              <li className="nav-item">
                {/* <!-- Button trigger modal --> */}
                <button
                  type="button"
                  className="btn btn-outline-primary border border-primary border-2 rounded-3 my-2 py-1 px-3"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  📱 Get app<i className="bi bi-android ms-2 fs-5"></i>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Modal */}
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-center mb-2">
              <div className="alert alert-primary text-start" role="alert">
                We are sorry, the app is currently available in Android device
                only 🙏🏻
              </div>
              <p>Scan the QR code to download the app APK file:</p>
              <i className="bi bi-qr-code fs-1"></i>
              <p>OR</p>
              <Link
                to="https://drive.google.com/file/d/1J3h-abPckZnEI4f91sk0qevnhaS2UA0_/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary rounded-3"
              >
                Download on this device
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
