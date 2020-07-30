import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../store/user/actions";
import { selectUser } from "../../store/user/selectors";
import Nav from "react-bootstrap/Nav";
import NavbarItem from "./NavbarItem";
import { Link } from "react-router-dom";

export default function LoggedIn() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const petSitter=user.petSitter
  return (
    <>
      {petSitter?<NavbarItem path="/become_a_sitter/address" linkText="Become a Sitter" />:<NavbarItem path="/petowner" linkText="Add your pets" />}
      <Nav.Link as={Link} to="/dashboard" style={{ padding: ".5rem 1rem" }}>{user.email}</Nav.Link>
      <Nav.Item style={{ padding: ".5rem 1rem" }} onClick={() => dispatch(logOut())}>Logout</Nav.Item>
    </>
  );
}
