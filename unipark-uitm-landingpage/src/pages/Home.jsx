import flutterLogo from '../assets/img/flutter-logo.webp'
import firebaseLogo from '../assets/img/firebase-logo.webp'
import laravelLogo from '../assets/img/laravel-logo.webp'
import androidLogo from '../assets/img/android-studio-logo.webp'
import arduinoLogo from '../assets/img/arduino-logo.webp'
import syahirImg from '../assets/img/syhrzkwn.webp'
import home from '../assets/img/home.webp'

function Home() {
    return (
        <div>
            <section>
                <div className="container">
                    <div className='card mt-5 border-0'>
                        <div className="row row-cols-1 row-cols-md-2 align-items-center">
                            <div className="col">
                                <h3 className="fw-semibold mb-4 text-primary">One app, UiTM's students needs</h3>
                                <div className="typewriter">
                                    <h1 className="fw-bold mb-4">UniPark@UiTM</h1>
                                </div>
                                <p className="text-muted mb-5">UiTM Parking Finder Mobile Application<br/>Help you find available parking spot and location quicker than ever!</p>
                                <a href="#features" className="btn btn-primary rounded-3 px-3 py-2">🚀 Explore now</a>
                            </div>
                            <div className="col text-center">
                                <img src={home} alt="UniPark UI" className='img-fluid home-img' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='section'>
                <div className="container my-5">
                    <h3 id="features" className="text-center fw-semibold mb-4">Features</h3>

                    <div className="row row-cols-1 row-cols-md-3 g-3">
                        <div className="col">
                            <div className="card border-0 rounded-4 alert alert-primary p-2 h-100">
                                <div className="card-body">
                                    <p><span className="badge bg-primary shadow p-2 mb-1 fs-5">⚡</span></p>
                                    <h6 className="card-title text-dark">Real-time Parking Availability</h6>
                                    <small className="card-text text-muted">The app shows users the real-time availability of parking spots in several UiTM Shah Alam parking areas.</small>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card border-0 rounded-4 bg-light p-2 h-100">
                                <div className="card-body">
                                    <p><span className="badge bg-white shadow p-2 mb-1 fs-5">📍</span></p>
                                    <h6 className="card-title">Interactive Map Geotagging</h6>
                                    <small className="card-text text-muted">The app provides directions to the parking spot by providing Google Maps or Waze embedded links to help users reach their destination.</small>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card border-0 rounded-4 alert alert-primary p-2 h-100">
                                <div className="card-body">
                                    <p><span className="badge bg-primary shadow p-2 mb-1 fs-5">⭐</span></p>
                                    <h6 className="card-title text-dark">Parking Spot Reviews, Ratings, & Sharing</h6>
                                    <small className="card-text text-muted">Users can leave reviews and ratings for the parking spot they used to help other users make better decisions and also share parking spot with their contacts.</small>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card border-0 rounded-4 bg-light p-2 h-100">
                                <div className="card-body">
                                    <p><span className="badge bg-white shadow p-2 mb-1 fs-5">🚨</span></p>
                                    <h6 className="card-title">Alerts & Notifications</h6>
                                    <small className="card-text text-muted">It uses RFID embedded on UiTM students' car stickers. The app automatically updates the parking availability and the mobile application will notify that user.</small>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card border-0 rounded-4 alert alert-primary p-2 h-100">
                                <div className="card-body">
                                    <p><span className="badge bg-primary shadow p-2 mb-1 fs-5">🙋🏻‍♂️</span></p>
                                    <h6 className="card-title text-dark">User Registration</h6>
                                    <small className="card-text text-muted">Users can register and login to the apps to unlock and utilise all the features.</small>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card border-0 rounded-4 bg-light p-2 h-100">
                                <div className="card-body">
                                    <p><span className="badge bg-white shadow p-2 mb-1 fs-5">🚗</span></p>
                                    <h6 className="card-title">RFID Sticker Activation</h6>
                                    <small className="card-text text-muted">Users need to register the RFID sticker in the app by entering their RFID and car details for the RFID sticker to work.</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='section'>
                <div className="container my-5">
                    <h3 id="technology" className="text-center fw-semibold mb-4">Technology</h3>

                    <div className="row row-cols-2 row-cols-md-5 g-4 text-center align-items-center">
                        <div className="col">
                            <img src={flutterLogo} className="img-fluid" width="60%" alt="Flutter logo"/>
                        </div>
                        <div className="col">
                            <img src={firebaseLogo} className="img-fluid" width="60%" alt="Firebase logo"/>
                        </div>
                        <div className="col">
                            <img src={laravelLogo} className="img-fluid" width="60%" alt="Laravel logo"/>
                        </div>
                        <div className="col">
                            <img src={androidLogo} className="img-fluid" width="60%" alt="Android Studio logo"/>
                        </div>
                        <div className="col">
                            <img src={arduinoLogo} className="img-fluid" width="30%" alt="Arduino logo"/>
                        </div>
                    </div>
                </div>
            </section>

            <section className='section'>
                <div className="container my-5">
                    <h3 id="technology" className="text-center fw-semibold mb-4">Hear from our satisfied users</h3>

                    <div className="row row-cols-1 row-cols-md-3 g-3">
                        <div className="col">
                            <div className="card border-0 rounded-4 p-2">
                                <div className="card-body">
                                    <small className="card-text text-muted">"The app shows users the real-time availability of parking spots in several UiTM Shah Alam parking areas."</small>
                                    <h6 className="mt-4">Johan Nazrin</h6>
                                    <p>4.9 <i class="bi bi-star-fill text-warning"></i> <i class="bi bi-star-fill text-warning"></i> <i class="bi bi-star-fill text-warning"></i> <i class="bi bi-star-fill text-warning"></i> <i class="bi bi-star-fill text-warning"></i></p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card border-0 rounded-4 p-2">
                                <div className="card-body">
                                    <small className="card-text text-muted">"The app shows users the real-time availability of parking spots in several UiTM Shah Alam parking areas."</small>
                                    <h6 className="mt-4">Danial Aqeem</h6>
                                    <p>4.9 <i class="bi bi-star-fill text-warning"></i> <i class="bi bi-star-fill text-warning"></i> <i class="bi bi-star-fill text-warning"></i> <i class="bi bi-star-fill text-warning"></i> <i class="bi bi-star-fill text-warning"></i></p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card border-0 rounded-4 p-2">
                                <div className="card-body">
                                    <small className="card-text text-muted">"The app shows users the real-time availability of parking spots in several UiTM Shah Alam parking areas."</small>
                                    <h6 className="mt-4">Nur Natasha</h6>
                                    <p>4.9 <i class="bi bi-star-fill text-warning"></i> <i class="bi bi-star-fill text-warning"></i> <i class="bi bi-star-fill text-warning"></i> <i class="bi bi-star-fill text-warning"></i> <i class="bi bi-star-fill text-warning"></i></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='section'>
                <div className="container my-5">
                    <h3 id="developer" className="text-center fw-semibold mb-4">Get to know the developer</h3>

                    <div className="card text-center border-0 rounded-4 bg-light p-3">
                        <div className="card-body">
                            <img src={syahirImg} className="img-fluid rounded-circle mb-2" width="100px" alt="Syahir Zakwan"/>
                            <h6 className="card-text mb-1">Muhamad Syahir Zakwan <i class="bi bi-patch-check-fill text-success"></i></h6>
                            <h6 className="card-text text-primary">Software Developer</h6>
                            <small className="text-muted">Hello, I'm Syahir Zakwan. I'm a software developer based in Malaysia. Graduated student in computer science and information technology from Universiti Teknologi MARA (UiTM). Very passionate in IT world, eager to learn, love to explore new things, and gain experiences. Have a project? or want to know more about me? Hit me up!</small>
                            <div className="d-flex justify-content-center mt-3">
                                <a href="https://github.com/syhrzkwn" target="_blank" rel='noreferrer' className="link-dark"><i className="bi bi-github fs-5 mx-3"></i></a>
                                <a href="https://linkedin.com/in/syhrzkwn" target="_blank" rel='noreferrer' className="link-dark"><i className="bi bi-linkedin fs-5 mx-3"></i></a>
                                <a href="https://instagram.com/syhrzkwn" target="_blank" rel='noreferrer' className="link-dark"><i className="bi bi-instagram fs-5 mx-3"></i></a>
                            </div>
                            <a href="mailto:mail@syhrzkwn.dev" className="btn btn-outline-primary border border-primary border-2 rounded-3 mt-3 px-4 me-1"><i className="bi bi-send me-1"></i> Email</a>
                            <a href="https://drive.google.com/file/d/1Gd6z82YI9w5f3UMz4HNWMFg-eMPKOTLA/view?usp=sharing" target="_blank" rel='noreferrer' className="btn btn-primary rounded-3 mt-3 px-4 ms-1"><i className="bi bi-file-earmark-person me-1"></i> Resume</a>         
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home