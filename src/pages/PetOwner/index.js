import React from "react";

import "../BecomeSitter/sitter.css";

export default function PetOwner() {
  return (
    <section className="become-a-sitter">
      <h1 className="h1">Add your pet</h1>
      <div className="row">
        <div className="col-1-of-4">
          <div className="box1">
            <h3>
              <a href="/address" className="linksitter">
                Add your address
              </a>
            </h3>
          </div>
        </div>

        <div className="col-1-of-4">
          <div className="box2">
            <h3>
              <a href="/phone" className="linksitter">
                Add your phone number and image
              </a>
            </h3>
          </div>
        </div>

        <div className="col-1-of-4">
          <div className="box3">
            <h3>
              <a href="/pets" className="linksitter">
                Add your Pets
              </a>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
