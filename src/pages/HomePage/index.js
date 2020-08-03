import React, { useState } from "react";
import "./homepage.css";


export default function HomePage() {
  
  return (
    <div>
      <header className="header">
        <div className="text-box">
          {" "}
          <h1 className="heading-primary">
            <span className="heading-primary-main">We’re The Dog People</span>
            <span className="heading-primary-sub">Enjoy our services</span>
          </h1>
          <a href="#" className="btn">Our Service</a>
        </div>
      </header>
     
    </div>
  );
}
