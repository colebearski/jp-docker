import React from "react";
import { Link } from "gatsby";
import cog from "../images/cog-solid.svg";
import cloud from "../images/cloud-solid.svg";
import cart from "../images/shopping-cart-solid.svg";

const Icon = () => {
  return (
    <section id="home-icons" className="pt-5">
      <div className="container">
        <div className="row">
          {/* Turning Gears */}
          <div className="col-md-4 text-center">
            <img src={cog} alt="" style={{ height: "12%" }} />
            <h3>Turning Gears</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Necessitatibus, maxime!
            </p>
          </div>

          {/* Sending Data */}
          <div className="col-md-4 text-center">
            <img src={cloud} alt="" style={{ height: "12%" }} />
            <h3>Sending Data</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Necessitatibus, maxime!
            </p>
          </div>

          {/* Making Money */}
          <div className="col-md-4 text-center">
            <img src={cart} alt="" style={{ height: "12%" }} />
            <h3>Making Money</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Necessitatibus, maxime!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Icon;
