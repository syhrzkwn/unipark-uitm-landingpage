import uniparkLogo from '../assets/img/unipark-logo.webp'
import uitmLogo from '../assets/img/uitm-logo.webp'

function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className="mt-auto w-100 py-5 bg-light">
        <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-6">
                <div className="col mb-3">
                    <div className="d-flex align-items-center">
                        <div><img src={uniparkLogo} width="100px" className="me-2" alt="UniPark@UiTM Logo"/></div>
                        <div><img src={uitmLogo} width="100px" alt="UiTM Logo"/></div>
                    </div>
                </div>

                <div className="col mb-3">

                </div>

                <div className="col mb-3">
                    <h6 className="fw-semibold mb-3">UniPark@UiTM</h6>

                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="/" className="nav-link p-0 link-dark">Home</a></li>
                        <li className="nav-item mb-2"><a href="/#features" className="nav-link p-0 link-dark">Features</a></li>
                        <li className="nav-item mb-2"><a href="/#technology" className="nav-link p-0 link-dark">Technology</a></li>
                    </ul>
                </div>

                <div className="col mb-3">
                    <h6 className="fw-semibold mb-3">APPLICATION</h6>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="/" className="nav-link p-0 link-dark" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Get app</a></li>
                        <li className="nav-item mb-2"><a href="/how-to-use" className="nav-link p-0 link-dark">How to use</a></li>
                        <li className="nav-item mb-2"><a href="/limitation" className="nav-link p-0 link-dark">Limitation</a></li>
                    </ul>
                </div>

                <div className="col mb-3">
                    <h6 className="fw-semibold mb-3">CASE STUDY</h6>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="https://drive.google.com/drive/folders/1OBM8QIzfQ9mypUFb8VZ6wzImxnSkIXfJ?usp=drive_link" target="_blank" rel='noreferrer' className="nav-link p-0 link-dark">Final report (CSP650)</a></li>
                    </ul>
                </div>

                <div className="col mb-3">
                    <h6 className="fw-semibold mb-3">UNIVERSITY</h6>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="https://www.waze.com/ms/live-map/directions/uitm-shah-alam-persiaran-institut?to=place.w.66519071.665190707.1066894" target="_blank" rel='noreferrer' className="nav-link p-0 link-dark">UiTM Shah Alam</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 link-dark disabled">Other coming soon</a></li>
                    </ul>
                </div>
            </div>
            <hr className="text-primary"/>
            <div className="row align-items-center g-2">
                <div className="col-sm-12 col-md-8">
                    <small>UniPark is a Trademark of syhrzkwn.dev.</small><br/>
                    <small>Copyright &copy; {year} UniPark@UiTM. All rights reserved.</small>
                </div>
                <div className="col-sm-12 col-md-4 text-md-end">
                    <a href="https://github.com/syhrzkwn/unipark-uitm-app" target="_blank" rel='noreferrer' className="link-dark text-decoration-none"><i className="bi bi-github fs-5"></i></a>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer