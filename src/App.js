//DEPENDENCIES
import React, { useContext } from "react";
import { Router, Redirect } from "@reach/router";

//GLOBAL STYLES
import { GlobalStyle } from "./styles/GlobalStyles";

//PAGES
import { Home } from "./pages/Home";
import { Details } from "./pages/Details";
import { Favs } from "./pages/Favs";
import { User } from "./pages/User";
import { NotRegisteredUser } from "./pages/NotRegisteredUser";
import { NotFound } from "./pages/NotFound";

//COMPONENTS
import { Logo } from "./components/Logo";
import { NavBar } from "./components/NavBar";

import { Context } from "./Context";

const App = () => {
  const { isAuth } = useContext(Context);
  return (
    <div>
      <GlobalStyle />
      <Logo />
      <Router>
        <NotFound default />
        <Home path="/" />
        <Home path="/pet/:id" />
        <Details path="/details/:detailId" />
        {!isAuth && <NotRegisteredUser path="/login" />}
        {!isAuth && <Redirect noThrow from="/favs" to="/login" />}
        {!isAuth && <Redirect noThrow from="/user" to="/login" />}
        {isAuth && <Redirect noThrow from="/login" to="/" />}
        <Favs path="/favs" />
        <User path="/user" />
      </Router>
      <NavBar />
    </div>
  );
};

export default App;
