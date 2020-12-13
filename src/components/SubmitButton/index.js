//DEPENDENCIES
import React from "react";

//STYLED COMPONENTS
import { Button } from "./styles";

export const SubmitButton = ({ children, disable, onClick }) => {
  return (
    <Button onClick={onClick} disabled={disable}>
      {children}
    </Button>
  );
};
