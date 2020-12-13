//DEPENDENCIES
import React from "react";
import { Helmet } from "react-helmet";

//COMPONENTS
import { ListOfCategories } from "../components/ListOfCategories";
import { ListOfPhotoCards } from "../components/ListOfPhotoCards";
import { Layout } from "../components/Layout";

export const Home = ({ id }) => {
  return (
    <Layout title="Tu app de mascotas">
      <Helmet>
        <meta
          name="decription"
          content="Con Petgram puedes encontrar fotos de animales"
        />
      </Helmet>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </Layout>
  );
};
