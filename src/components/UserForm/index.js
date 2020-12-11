//DEPENDENCIES
import React from "react";

//HOOKS
import { useInputValue } from "../../hooks/useInputValue";

//STYLED COMPONENTS
import { Form, Input, Button, Title, Error } from "./styles";

export const UserForm = ({ disabled, error, onSubmit, title }) => {
  const email = useInputValue("");
  const password = useInputValue("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email: email.value, password: password.value });
  };

  return (
    <>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Title>{title}</Title>
        <Input
          disabled={disabled}
          placeholder="Email"
          type="email"
          {...email}
        />
        <Input
          disabled={disabled}
          placeholder="Password"
          type="password"
          {...password}
        />
        <Button disabled={disabled}>{title}</Button>
      </Form>
      {error && <Error>{error}</Error>}
    </>
  );
};
