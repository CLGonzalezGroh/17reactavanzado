//DEPENDENCIES
import React, { useContext } from "react";

//GLOBAL STATE
import { Context } from "../Context";

//COMPONENT
import { SubmitButton } from "../components/SubmitButton";

export const User = () => {
  const { removeAuth } = useContext(Context);
  return (
    <>
      <h1>User</h1>
      <SubmitButton onClick={removeAuth}>Cerrar sesion</SubmitButton>
    </>
  );
};
