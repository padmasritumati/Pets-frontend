import React from "react";
//mport { Link } from "react-router-dom";
import "./sitter.css";

export default function BecomeSitter() {
  return (
    <section className="become-a-sitter">
      <h1 className="h1">Become a Sitter</h1>
      <div className="row">
        <div className="row">
          <div className="box1">
          <h3 >
              <a href="/address" className="linksitter">Add your address</a>
            </h3>
          </div>
        </div>

        <div className="row">
          <div className="box2">
            <h3 >
              <a href="/phone" className="linksitter">Add your phone number and image</a>
            </h3>
          </div>
        </div>

        <div className="row">
          <div className="box3">
          <h3 >
              <a href="/services" className="linksitter">Add your services</a>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
