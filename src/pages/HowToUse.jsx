function HowToUse() {
    return (
        <section className='section'>
            <div className="container">
                <div className="my-5">
                    <h1 className="text-center mb-4">New to UniPark@UiTM?</h1>
    
                    <div className="card border-0 rounded-4 bg-light p-0 h-100 mb-5">
                        <div className="card-body">
                            <div class="accordion accordion-flush" id="accordionPanelsStayOpenExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                            <span>How to download and register</span>
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                        <div class="accordion-body">
                                            <div className="mb-3">
                                                <p className="mb-0 fw-semibold">Step 1:</p>
                                                <small>Navigate to the navigation bar/Footer and click on "Get app" button.</small>
                                            </div>
                                            <div className="mb-3">
                                                <p className="mb-0 fw-semibold">Step 2:</p>
                                                <small>Use your Android to scan the QR code or click on "download on this device" if you open the website from your Android.</small>
                                            </div>
                                            <div className="mb-0">
                                                <p className="mb-0 fw-semibold">Step 3:</p>
                                                <small>To be continued.</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                            <span>How to use the app</span>
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                                        <div class="accordion-body">
                                            <div className="mb-3">
                                                <p className="mb-0 fw-semibold">Step 1:</p>
                                                <small>Example</small>
                                            </div>
                                            <div className="mb-3">
                                                <p className="mb-0 fw-semibold">Step 2:</p>
                                                <small>Example</small>
                                            </div>
                                            <div className="mb-0">
                                                <p className="mb-0 fw-semibold">Step 3:</p>
                                                <small>Example</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                            <span>RFID activation</span>
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                                        <div class="accordion-body">
                                            <div className="mb-3">
                                                <p className="mb-0 fw-semibold">Step 1:</p>
                                                <small>Example</small>
                                            </div>
                                            <div className="mb-3">
                                                <p className="mb-0 fw-semibold">Step 2:</p>
                                                <small>Example</small>
                                            </div>
                                            <div className="mb-0">
                                                <p className="mb-0 fw-semibold">Step 3:</p>
                                                <small>Example</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="row row-cols-1 row-cols-md-2 g-3">
                        <div className="col">
                            <div className="card border-0 rounded-4 alert alert-primary px-2 pt-2 pb-0 h-100">
                                <div className="card-body">
                                    <h5 className="mb-3 text-dark">Ratings & Reviews</h5>
                                    <div className="mb-0 text-muted">
                                        <p className="mb-0">Don't forget to leave a rate and review about the app</p>
                                        <p className="mb-4">Let's developer know your thought about the app</p>
                                        <a href="https://forms.gle/xwgn3eh66BRuGiVo6" target="_blank" rel="noreferrer" className="btn btn-primary border-2 rounded-3 py-2 px-3">⭐ Start ratings & reviews</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card border-0 rounded-4 bg-light p-2 h-100">
                                <div className="card-body">
                                    <h5 className="mb-3">Have a problems/issues with the app</h5>
                                    <div className="mb-0 text-muted">
                                        <p className="mb-0"></p>
                                        <p className="mb-4">Need immediate assistance? let's developer know a problems/issues you faced while using the app by contacting me via WhatsApp.</p>
                                        <a href="https://wa.link/rhnbpl" target="_blank" rel="noreferrer" className="btn btn-outline-dark border border-dark border-2 rounded-3 py-2 px-3"><i class="bi bi-whatsapp"></i> WhatsApp</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowToUse