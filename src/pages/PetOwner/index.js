import React from "react";
import { Link } from "react-router-dom";

export default function BecomeSitter() {
  return (
    <div>
      <h1>Add your Pets</h1>
      <Link to="/address">Click here to add address</Link><br></br>
      <Link to="/phone">click here to add phone</Link><br></br>
      <Link to="/pets">click here to add pets</Link><br></br>
    </div>
  );
}