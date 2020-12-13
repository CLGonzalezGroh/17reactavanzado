//DEPENDENCIES
import React from "react";

//COMPONENTS
import { PhotoCardDetails } from "../components/PhotoCardDetails";
import { Layout } from "../components/Layout";

export default ({ detailId }) => {
  return (
    <Layout title={`Foto Nro ${detailId}`}>
      <PhotoCardDetails detailId={detailId} />
    </Layout>
  );
};
