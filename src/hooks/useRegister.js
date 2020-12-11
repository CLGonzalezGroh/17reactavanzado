//DEPENDENCIES
import { gql, useMutation } from "@apollo/client";

const REGISTER = gql`
  mutation signup($input: UserCredentials!) {
    signup(input: $input)
  }
`;

export const useRegister = () => {
  const [register, { data, loading, error }] = useMutation(REGISTER);
  return { register, data, loading, error };
};
