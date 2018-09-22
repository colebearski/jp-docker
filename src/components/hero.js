import React from "react";
import { Link } from "gatsby";

const Hero = () => {
  return (
    <div>
      <section id="showcase">
        <div id="ddCarousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li
              data-target="#ddCarousel"
              data-slide-to="0"
              className="active"
            />
            <li data-target="#ddCarousel" data-slide-to="1" className="" />
            <li data-target="#ddCarousel" data-slide-to="2" className="" />
          </ol>

          {/* Item One */}

          <div className="carousel-inner">
            <div className="carousel-item carousel-image-1 active">
              <div className="container">
                <div className="carousel-caption d-none d-sm-block text-right mb-5">
                  <h1 className="display-3">Heading Uno</h1>
                  <p className="lead">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Eos a fugit omnis eius id quaerat eveniet reprehenderit nisi
                    facere provident?
                  </p>
                  <Link to="/" className="btn btn-danger btn-lg">
                    Sign Up Now
                  </Link>
                </div>
              </div>
            </div>

            {/* Item Two */}
            <div className="carousel-item carousel-image-2">
              <div className="container">
                <div className="carousel-caption d-none d-sm-block mb-5">
                  <h1 className="display-3">Heading Dos</h1>
                  <p className="lead">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Eos a fugit omnis eius id quaerat eveniet reprehenderit nisi
                    facere provident?
                  </p>
                  <Link to="/" className="btn btn-primary btn-lg">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>

            {/* Item Three */}
            <div className="carousel-item carousel-image-3">
              <div className="container">
                <div className="carousel-caption d-none d-sm-block text-right mb-5">
                  <h1 className="display-3">Heading Tres</h1>
                  <p className="lead">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Eos a fugit omnis eius id quaerat eveniet reprehenderit nisi
                    facere provident?
                  </p>
                  <Link to="/" className="btn btn-success btn-lg">
                    Apply Here
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <a
            href="#ddCarousel"
            data-slide="prev"
            className="carousel-control-prev"
          >
            <span className="carousel-control-prev-icon" />
          </a>

          <a
            href="#ddCarousel"
            data-slide="next"
            className="carousel-control-next"
          >
            <span className="carousel-control-next-icon" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Hero;
