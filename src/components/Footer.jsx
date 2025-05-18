import { Link } from "react-router-dom";
import uniparkLogo from "../assets/img/unipark-logo.webp";
import uitmLogo from "../assets/img/uitm-logo.webp";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto w-100 py-5 bg-light">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-6">
          <div className="col mb-3">
            <div className="d-flex align-items-center">
              <div>
                <img
                  src={uniparkLogo}
                  width="100px"
                  className="me-2"
                  alt="UniPark@UiTM Logo"
                />
              </div>
              <div>
                <img src={uitmLogo} width="100px" alt="UiTM Logo" />
              </div>
            </div>
          </div>

          <div className="col mb-3"></div>

          <div className="col mb-3">
            <h6 className="fw-semibold mb-3">UniPark@UiTM</h6>

            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link to="/" className="nav-link p-0 link-dark">
                  Home
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/#features" className="nav-link p-0 link-dark">
                  Features
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/#technology" className="nav-link p-0 link-dark">
                  Technology
                </Link>
              </li>
            </ul>
          </div>

          <div className="col mb-3">
            <h6 className="fw-semibold mb-3">APPLICATION</h6>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link
                  to="/"
                  className="nav-link p-0 link-dark"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  Get app
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/how-to-use" className="nav-link p-0 link-dark">
                  How to use
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/limitation" className="nav-link p-0 link-dark">
                  Limitation
                </Link>
              </li>
            </ul>
          </div>

          <div className="col mb-3">
            <h6 className="fw-semibold mb-3">CASE STUDY</h6>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link
                  to="https://drive.google.com/file/d/1rLpIsjhT1rKR6639S14L9uuOGpL17XgH/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className="nav-link p-0 link-dark"
                >
                  Final report (CSP650)
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link
                  to="https://drive.google.com/file/d/1OIFFOy7FvpuHw2lBwsHz-bPT0MxZIiXf/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className="nav-link p-0 link-dark"
                >
                  Project Poster
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link
                  to="https://drive.google.com/file/d/1YkLxsx-bq3-0me2uKtBM1k-9AdQlb2Bd/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className="nav-link p-0 link-dark"
                >
                  Project Presentation
                </Link>
              </li>
            </ul>
          </div>

          <div className="col mb-3">
            <h6 className="fw-semibold mb-3">UNIVERSITY</h6>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link
                  to="https://www.waze.com/ms/live-map/directions/uitm-shah-alam-persiaran-institut?to=place.w.66519071.665190707.1066894"
                  target="_blank"
                  rel="noreferrer"
                  className="nav-link p-0 link-dark"
                >
                  UiTM Shah Alam
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="#" className="nav-link p-0 link-dark disabled">
                  Other coming soon
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <hr className="text-primary" />
        <div className="row align-items-center g-2">
          <div className="col-sm-12 col-md-8">
            <small>UniPark is Link Trademark of syhrzkwn.dev.</small>
            <br />
            <small>
              Copyright &copy; {year} UniPark@UiTM. All rights reserved.
            </small>
          </div>
          <div className="col-sm-12 col-md-4 text-md-end">
            <Link
              to="https://github.com/syhrzkwn/unipark-uitm-app"
              target="_blank"
              rel="noreferrer"
              className="link-dark text-decoration-none"
            >
              <i className="bi bi-github fs-5"></i>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
