import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../store/user/actions";
//import Button from "react-bootstrap/Button";
import { selectUser } from "../../store/user/selectors";
import Nav from "react-bootstrap/Nav";
import Dropdown from "react-bootstrap/Dropdown";
import NavbarItem from "./NavbarItem";

export default function LoggedIn() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle size="sm">
          <Nav.Item style={{ padding: ".5rem 1rem" }}>
            {user.full_name}
          </Nav.Item>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item><NavbarItem path="/dashboard" linkText="Dashboard" /></Dropdown.Item>
          <Dropdown.Item onClick={() => dispatch(logOut())}>
            Logout
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}
