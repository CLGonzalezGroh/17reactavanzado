//DEPENDENCIES
import React from "react";
import { Router } from "@reach/router";

//GLOBAL STYLES
import { GlobalStyle } from "./styles/GlobalStyles";

//PAGES
import { Home } from "./pages/Home";
import { Details } from "./pages/Details";

//COMPONENTS
import { Logo } from "./components/Logo";
import { NavBar } from "./components/NavBar";

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
      <NavBar />
    </div>
  );
};

export default App;
