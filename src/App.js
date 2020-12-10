//DEPENDENCIES
import React from "react";
import { Router } from "@reach/router";

//GLOBAL STYLES
import { GlobalStyle } from "./styles/GlobalStyles";

//PAGES
import { Home } from "./pages/Home";
import { Details } from "./pages/Details";
import { Favs } from "./pages/Favs";
import { User } from "./pages/User";
import { NotRegisteredUser } from "./pages/NotRegisteredUser";

//COMPONENTS
import { Logo } from "./components/Logo";
import { NavBar } from "./components/NavBar";

import Context from "./Context";

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Logo />
      <Router>
        <Home path="/" />
        <Home path="/pet/:id" />
        <Details path="/details/:detailId" />
      </Router>
      <Context.Consumer>
        {({ isAuth }) =>
          isAuth ? (
            <Router>
              <Favs path="/favs" />
              <User path="/user" />
            </Router>
          ) : (
            <Router>
              <NotRegisteredUser path="/favs" />
              <NotRegisteredUser path="/user" />
            </Router>
          )
        }
      </Context.Consumer>
      <NavBar />
    </div>
  );
};

export default App;
