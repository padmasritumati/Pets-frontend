import React from "react";
import NavbarItem from "./NavbarItem";

export default function LoggedOut() {
  return (
    <>
      <NavbarItem path="/our_services" linkText="Our Services" />
      <NavbarItem path="/signup" linkText="Sign Up" />
      <NavbarItem path="/login" linkText="Login" />
    </>
  );
}
