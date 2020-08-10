import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectToken, selectUser } from "../../store/user/selectors";
import { logOut } from "../../store/user/actions";
import "./navigation.css";
//import { Link } from "react-router-dom";

export default function Navigation() {
  const token = useSelector(selectToken);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
 const handler=()=>{
  dispatch(logOut())
 
 }
  return (
    <div className="homepage-navbar">
      <nav className="navbar">
        <div className="title">
          <a className="link" href="/">
            <i className="fas fa-dog"></i>PETS
          </a>
        </div>

        <div className="navbar-links">
          <ul>
            <li>
              <a href="/search_sitters">Search Sitters</a>
            </li>
            {!token ? (
              <li>
                <a href="/signup">Sign up</a>
              </li>
            ) : null}
            {user.petSitter ? (
              <li>
                <a href="/become_a_sitter">Become a sitter</a>
              </li>
            ) : null}
            {user.petOwner ? (
              <li>
                <a href="/petowner">Add your pet</a>
              </li>
            ) : null}
            {!token ? (
              <li>
                <a href="/login">Log in</a>
              </li>
            ) : (
              <div>
                <li>
                  <a href="/dashboard">{user.full_name}</a>
                </li>
                <a href="/"><button
                  className="button-logout"
                  onClick={handler}
                >
                  Log out
                </button></a>
                
              </div>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
}
