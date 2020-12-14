//DEPENDENCIES
import React, { useContext, Suspense } from "react";
import { Router, Redirect } from "@reach/router";

//GLOBAL STYLES
import { GlobalStyle } from "./styles/GlobalStyles";

//PAGES
// import { Home } from "./pages/Home";
// import { Details } from "./pages/Details";
// import { Favs } from "./pages/Favs";
// import { User } from "./pages/User";
// import { NotRegisteredUser } from "./pages/NotRegisteredUser";
// import { NotFound } from "./pages/NotFound";

//COMPONENTS
import { Logo } from "./components/Logo";
import { NavBar } from "./components/NavBar";
import { Spinner } from "./components/Spinner";

import { Context } from "./Context";

const Favs = React.lazy(() => import("./pages/Favs"));
const Details = React.lazy(() => import("./pages/Details"));
const User = React.lazy(() => import("./pages/User"));
const NotRegisteredUser = React.lazy(() => import("./pages/NotRegisteredUser"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const Home = React.lazy(() => import("./pages/Home"));

const App = () => {
  const { isAuth } = useContext(Context);
  return (
    <Suspense fallback={<Spinner />}>
      <GlobalStyle />
      <Logo />
      <Router>
        <Home path="/" />
        <Home path="/pet/:id" />
        <Details path="/details/:detailId" />
        {!isAuth && <NotRegisteredUser path="/login" />}
        {!isAuth && <Redirect noThrow from="/favs" to="/login" />}
        {!isAuth && <Redirect noThrow from="/user" to="/login" />}
        {isAuth && <Redirect noThrow from="/login" to="/" />}
        <Favs path="/favs" />
        <User path="/user" />
        <NotFound default />
      </Router>
      <NavBar />
    </Suspense>
  );
};

export default App;
