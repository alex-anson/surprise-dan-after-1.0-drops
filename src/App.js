import "./App.css";
import moose from "./img/moose.jpg";
import thanks from "./img/thanks.jpg";
import rocket from "./img/rocket.jpg";

function App() {
  return (
    <div className="mx-auto my-5" style={{ width: "1200px" }}>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="card h-100">
              <img
                src={moose}
                className="card-img-top img-thumbnail"
                alt="moose"
              />
              <div className="card-body text-center">
                <h5 className="card-title fs-4 fw-bold">Moose!</h5>
                <p className="card-text my-2">Insert text here!</p>
                <div className="d-flex justify-content-end">
                  <div className="btn btn-outline-dark">Click me!</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img
                src={thanks}
                className="card-img-top img-thumbnail"
                alt="thank you"
              />
              <div className="card-body text-center">
                <h5 className="card-title fs-4 fw-bold">Thank you!</h5>
                <p className="card-text my-2">Insert text here!</p>
                <div className="d-flex justify-content-end">
                  <div className="btn btn-outline-dark">Click me!</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img
                src={rocket}
                className="card-img-top img-thumbnail"
                alt="rocket"
              />
              <div className="card-body text-center ">
                <h5 className="card-title fs-4 fw-bold">
                  To the infinity and beyond!
                </h5>
                <p className="card-text my-2">Insert text here!</p>
                <div className="d-flex justify-content-end">
                  <div className="btn btn-outline-dark">Click me!</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
