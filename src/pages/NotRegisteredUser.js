//DEPENDENCIES
import React from "react";

//CONTEXT
import Context from "../Context";

//COMPONENTS
import { UserForm } from "../components/UserForm";

//HOOKS
import { useRegister } from "../hooks/useRegister";

export const NotRegisteredUser = () => {
  const { register, data, loading, error } = useRegister();

  return (
    <Context.Consumer>
      {({ activateAuth }) => {
        const handleRegister = ({ email, password }) =>
          register({
            variables: {
              input: { email, password },
            },
          })
            .then(activateAuth)
            .catch((e) => {
              console.log(e);
            });
        const errorMsg = error && "User already exist!";
        return (
          <>
            <UserForm
              disabled={loading}
              error={errorMsg}
              onSubmit={handleRegister}
              title="Sing up"
            />
            <UserForm onSubmit={activateAuth} title="Sing in" />
          </>
        );
      }}
    </Context.Consumer>
  );
};
