import { gql, useMutation } from "@apollo/client";

const LIKE_PHOTO = gql`
  mutation($input: LikePhoto!) {
    likePhoto(input: $input) {
      id
      likes
      liked
    }
  }
`;

export const useToggleLike = () => {
  const [toggleLike] = useMutation(LIKE_PHOTO);
  return toggleLike;
};
