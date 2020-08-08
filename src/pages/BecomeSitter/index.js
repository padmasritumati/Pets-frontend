import React from "react";
import { Link } from "react-router-dom";
import "./sitter.css";

export default function BecomeSitter() {
  return (
    <section class="become-a-sitter">
      <h1 className="h1">Become a Sitter</h1>
      <div class="row">
        <div class="col-1-of-4">
          <div class="box1">
          <h3 >
              <a href="/address" className="linksitter">Add your address</a>
            </h3>
          </div>
        </div>

        <div class="col-1-of-4">
          <div class="box2">
            <h3 >
              <a href="/phone" className="linksitter">Add your phone number and image</a>
            </h3>
          </div>
        </div>

        <div class="col-1-of-4">
          <div class="box3">
          <h3 >
              <a href="/services" className="linksitter">Add your services</a>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
