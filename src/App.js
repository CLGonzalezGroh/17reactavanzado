import React from "react";

import { ListOfCategories } from "./components/ListOfCategories";
import { GlobalStyle } from "./GlobalStyles";

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <ListOfCategories />
    </div>
  );
};

export default App;
