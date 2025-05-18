function Limitation() {
  return (
    <section className="section">
      <div className="container">
        <div className="my-5">
          <h1 className="text-center mb-4">Limitation</h1>

          <div className="card border-0 rounded-4 bg-light p-2 h-100">
            <div className="card-body">
              <p>
                <i className="bi bi-x-circle-fill text-danger me-2"></i>{" "}
                UniPark@UiTM mobile application is only available for Android
                users.
              </p>
              <p>
                <i className="bi bi-x-circle-fill text-danger me-2"></i>{" "}
                UniPark@UiTM mobile application does not provide in-app GPS
                navigation.
              </p>
              <p>
                <i className="bi bi-x-circle-fill text-danger me-2"></i>{" "}
                UniPark@UiTM mobile application is not covering all parking
                spots inside UiTM Shah Alam.
              </p>
              <p>
                <i className="bi bi-x-circle-fill text-danger me-2"></i> Area
                limitation of covering only inside UiTM Shah Alam area.
              </p>
              <p>
                {" "}
                <i className="bi bi-x-circle-fill text-danger me-2"></i> Double
                parking cars are not counted in the system as the available
                parking spot has exceeded.
              </p>
              <p>
                <i className="bi bi-x-circle-fill text-danger me-2"></i>{" "}
                Students car without registered RFID sticker is not counted in
                the system.{" "}
                <small className="text-muted">
                  (the system only counts available parking based on students
                  with RFID student car sticker)
                </small>
              </p>
              <hr />
              <p>
                <i className="bi bi-info-circle-fill text-primary me-2"></i>{" "}
                RFID testing is only implemented at Public Parking, Engineering
                Complex, UiTM Shah Alam.
              </p>
              <p className="mb-0">
                <i className="bi bi-info-circle-fill text-primary me-2"></i>{" "}
                Physical RFID readers is not permanently installed. It will be
                temporarily implemented for testing as Link prove of concept.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Limitation;
