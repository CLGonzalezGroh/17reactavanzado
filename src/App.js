//DEPENDENCIES
import React from "react";
import { Router } from "@reach/router";

//GLOBAL STYLES
import { GlobalStyle } from "./styles/GlobalStyles";

//PAGES
import { Home } from "./pages/Home";

//COMPONENTS
import { PhotoCardDetails } from "./components/PhotoCardDetails";
import { Logo } from "./components/Logo";

const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search);
  const detailId = urlParams.get("detail");

  return (
    <div>
      <GlobalStyle />
      <Logo />
      {detailId ? (
        <PhotoCardDetails detailId={detailId} />
      ) : (
        <Router>
          <Home path="/" />
          <Home path="/pet/:id" />
        </Router>
      )}
    </div>
  );
};

export default App;
