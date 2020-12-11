//DEPENDENCIES
import React from "react";

//CONTEXT
import Context from "../Context";

//COMPONENTS
import { UserForm } from "../components/UserForm";

//HOOKS
import { useRegister } from "../hooks/useRegister";
import { useLogin } from "../hooks/useLogin";

export const NotRegisteredUser = () => {
  const {
    register,
    data: dataReg,
    loading: loadingReg,
    error: errorReg,
  } = useRegister();
  const {
    login,
    data: dataLog,
    loading: loadingLog,
    error: errorLog,
  } = useLogin();

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
        const errorMsgReg = errorReg && "User already exist!";
        const handleLogin = ({ email, password }) =>
          login({
            variables: {
              input: { email, password },
            },
          })
            .then(activateAuth)
            .catch((e) => {
              console.log(e);
            });
        const errorMsgLog = errorLog && "Invalid user or password";
        return (
          <>
            <UserForm
              disabled={loadingReg}
              error={errorMsgReg}
              onSubmit={handleRegister}
              title="Sing up"
            />
            <UserForm
              disabled={loadingLog}
              error={errorMsgLog}
              onSubmit={handleLogin}
              title="Sing in"
            />
          </>
        );
      }}
    </Context.Consumer>
  );
};
