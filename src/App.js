import React from "react";

import { GlobalStyle } from "./styles/GlobalStyles";

import { ListOfCategories } from "./components/ListOfCategories";
import { ListOfPhotoCards } from "./components/ListOfPhotoCards";
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
        <>
          <ListOfCategories />
          <ListOfPhotoCards categoryId="3" />
        </>
      )}
    </div>
  );
};

export default App;
