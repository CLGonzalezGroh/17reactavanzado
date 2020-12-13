//DEPENDENCIES
import React from "react";

//COMPONENTS
import { PhotoCardDetails } from "../components/PhotoCardDetails";
import { Layout } from "../components/Layout";

export const Details = ({ detailId }) => {
  return (
    <Layout title={`Foto Nro ${detailId}`}>
      <PhotoCardDetails detailId={detailId} />
    </Layout>
  );
};
