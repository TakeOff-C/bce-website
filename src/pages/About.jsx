import "../css/About.css";
import img from "../images/img.png";
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import carousel1 from "../images/carousel1.png";
import carousel2 from "../images/carousel2.png";
import { Link } from "react-router-dom";
import lineimg from "../images/lingImg.png";

function About() {
  return (
    <>
      <body>
        {/* offcanvas menu */}
        {/* to trigger the canvas, check the trigger code on menu */}

        <div
          class="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasTop"
          aria-labelledby="offcanvasTopLabel"
        >
          <div class="offcanvas-header">
            <h5 id="offcanvasTopLabel">
              {" "}
              <b>Get a quote right now</b>
            </h5>
            {/* badge start */}
            <button type="button" class="btn btn-primary position-relative">
              Registered
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                99+
                <span class="visually-hidden">unread messages</span>
              </span>
            </button>
            {/* badge end */}
            <button
              type="button"
              class="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <p>
              Auto liability insurance covers property damage, medical bills,
              and legal fees when a trucker is at fault in an accident,
              providing financial protection and peace of mind
            </p>
            <div class="vertical-menu">
              <div class="modal-body">
                <form>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="User name"
                    required
                  />
                  <br />
                  <br />
                  <input
                    type="email"
                    name=""
                    id=""
                    placeholder="E-mail"
                    required
                  />
                  <br />
                  <br />
                  <input
                    type="number"
                    name=""
                    id=""
                    placeholder="Phone number"
                    required
                  />
                  <br />
                  <br />
                  <button
                    className="btn btn-success"
                    onClick={() => openNotificationWithIcon("success")}
                  >
                    Request for a quote
                  </button>
                  <br />
                  <br />
                </form>
                <p>
                  By submitting your data, you authorize us to contact you, To
                  find out more, see our Privacy policy
                </p>
                <hr />
                <i class="bi bi-shield-fill-check">
                  <b>Your data is save with us</b>
                </i>
              </div>
            </div>
          </div>
        </div>

        {/* our mission */}
        <h2>About us</h2>

        <br />
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p> Trusted insurer</p>
              <h3 className="h3" style={{ color: "red" }}>
                Our Mission
              </h3>
              <img src={lineimg} alt="" />

              <p>
                At BCE, our mission is to empower trucking businesses with
                tailored insurance solutions and expert guidance. We are
                committed to simplifying the complexities of the industry,
                ensuring compliance, and promoting success on the road. With a
                foundation built by truckers, for truckers, we stand by our
                clients every mile of the journey, providing peace of mind and
                unparalleled support.
              </p>
              <span>
                <button
                  className="quote"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasTop"
                  aria-controls="offcanvasTop"
                >
                  Get a qoute
                </button>
              </span>
              <Link to="/ContactUs">
                <button className="email">Get a contat us</button>
              </Link>
            </div>
            <div className="col-md-6">
              <img src={img} alt="" className="img" />
            </div>
          </div>
        </div>

        <br />
        <br />
        {/* truckers */}
        <div className="trucker">
          <p>
            Connecting trucking challenges with needed solutions
            <h3 className="helping">Helping all truckers thrive</h3>{" "}
          </p>
        </div>

        <br />

        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src={img1} alt="" className="img1" />
            </div>
            <div className="col-md-6">
              <br />
              <br />
              <i class="bi bi-patch-check"></i>{" "}
              <b>Need help understanding trucking compliance?</b> <br />
              <p>
                We don't just provide insurance; we also assist with a range of
                DOT compliance issues.
              </p>
              <hr />
              <br />
              <i class="bi bi-patch-check"></i>{" "}
              <b>Having issues find competitive rates?</b> <br />
              <p>Having issues find competitive rates?</p>
              <hr />
              <br />
              <i class="bi bi-patch-check"></i>{" "}
              <b>Losing loads due to slow COI’s?</b> <br />
              <p>
                Frustrated by lost loads due to delayed COIs from your agent?
              </p>
            </div>
          </div>
        </div>

        {/* our mission */}
        <br />
        <br />
        <br />
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p> Trusted insurer</p>
              <h3 className="h3" style={{ color: "red" }}>
                Our Mission
              </h3>
              <img src={lineimg} alt="" />

              <p>
                At BCE, our mission is to empower trucking businesses with
                tailored insurance solutions and expert guidance. We are
                committed to simplifying the complexities of the industry,
                ensuring compliance, and promoting success on the road. With a
                foundation built by truckers, for truckers, we stand by our
                clients every mile of the journey, providing peace of mind and
                unparalleled support.
              </p>
            </div>
            <div className="col-md-6">
              <img src={img2} alt="" className="img" />
            </div>
          </div>
        </div>

        <br />
        <br />
        {/* carousel */}

        <div className="container">
          <div className="row">
            <div className="col-md-6">
              {/* carousel start */}
              <div
                id="carouselExampleCaptions"
                class="carousel slide"
                data-bs-ride="carousel"
              >
                <div class="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="0"
                    class="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src={carousel1} class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                      <h5>First slide label</h5>
                      <p>
                        Some representative placeholder content for the first
                        slide.
                      </p>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img src={carousel2} class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                      <h5>Second slide label</h5>
                      <p>
                        Some representative placeholder content for the second
                        slide.
                      </p>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img src={carousel1} class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                      <h5>Third slide label</h5>
                      <p>
                        Some representative placeholder content for the third
                        slide.
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div className="col-md-6">
              <br />
              <br />
              <i class="bi bi-patch-check"></i>{" "}
              <b>Need help understanding trucking compliance?</b> <br />
              <p>
                We don't just provide insurance; we also assist with a range of
                DOT compliance issues.
              </p>
              <hr />
              <br />
              <i class="bi bi-patch-check"></i>{" "}
              <b>Having issues find competitive rates?</b> <br />
              <p>Having issues find competitive rates?</p>
              <hr />
              <br />
              <i class="bi bi-patch-check"></i>{" "}
              <b>Losing loads due to slow COI’s?</b> <br />
              <p>
                Frustrated by lost loads due to delayed COIs from your agent?
              </p>
            </div>
          </div>
        </div>

        <br />
      </body>
    </>
  );
}

export default About;
