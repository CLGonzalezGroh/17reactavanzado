import { useQuery, gql } from "@apollo/client";

const GET_PHOTO = gql`
  query getPhoto($detailId: ID!) {
    photo(id: $detailId) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;

export const useGetPhoto = (detailId) => {
  const { loading, error, data } = useQuery(GET_PHOTO, {
    variables: { detailId },
  });
  return { loading, error, data };
};
