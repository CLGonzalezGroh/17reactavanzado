//DEPENDENCIES
import React, { useContext } from "react";

//GLOBAL STATE
import { Context } from "../Context";

//COMPONENT
import { SubmitButton } from "../components/SubmitButton";
import { Layout } from "../components/Layout";

export const User = () => {
  const { removeAuth } = useContext(Context);
  return (
    <Layout title="User Info">
      <SubmitButton onClick={removeAuth}>Cerrar sesion</SubmitButton>
    </Layout>
  );
};
