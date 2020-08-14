import React, { useEffect } from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Loading from "./components/Loading";
import MessageBox from "./components/MessageBox";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import SearchSitters from "./pages/SearchSitters";
import BecomeSitter from "./pages/BecomeSitter";
import HomePage from "./pages/HomePage";
import OurServices from "./components/OurServices";
import Dashboard from "./pages/Dashboard";
import Phone from "./components/Phone";
import Service from "./components/Services";
import UserById from "./pages/UserById";
import PetOwner from "./pages/PetOwner";
import Adderss from "./components/Address";
import Pets from "./components/Pets";
import Contact from "./pages/Contact"

import { useDispatch, useSelector } from "react-redux";
import { selectAppLoading } from "./store/appState/selectors";
import { getUserWithStoredToken } from "./store/user/actions";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAppLoading);

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div className="App">
      <Navigation />
      <MessageBox />
      {isLoading ? <Loading /> : null}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/address" component={Adderss} />
        <Route path="/phone" component={Phone} />
        <Route path="/services" component={Service} />
        <Route path="/pets" component={Pets}/>
        <Route path="/become_a_sitter" component={BecomeSitter} />
        <Route path="/petowner" component={PetOwner} />
        <Route path="/our_services" component={OurServices} />
        <Route path="/search_sitters" component={SearchSitters} />
        <Route path="/sitters/:id" component={UserById} />
        <Route path="/dashboard/:id" component={Dashboard} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/contact/:id" component={Contact}/>
      </Switch>
    </div>
  );
}

export default App;
