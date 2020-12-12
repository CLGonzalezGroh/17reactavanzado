import { useQuery, gql } from "@apollo/client";

const GET_FAV = gql`
  query getFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
`;

export const useGetFavs = () => {
  const { loading, error, data } = useQuery(GET_FAV, {
    fetchPolicy: "network-only",
  });
  return { loading, error, data };
};
