import React from "react";
import { gql, useMutation } from "@apollo/client";

const LIKE_ANONYMOUS_PHOTO = gql`
  mutation($input: LikePhoto!) {
    likeAnonymousPhoto(input: $input) {
      id
      likes
      liked
    }
  }
`;

export const useToggleLike = () => {
  const [toggleLike] = useMutation(LIKE_ANONYMOUS_PHOTO);
  return toggleLike;
};
