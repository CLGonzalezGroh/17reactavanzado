//DEPENDENCIES
import React from "react";

//COMPONENTS
import { PhotoCard } from "../PhotoCard";

//HOOKS
import { useGetPhoto } from "../../hooks/useGetPhoto";

export const PhotoCardDetails = ({ detailId }) => {
  const { loading, error, data } = useGetPhoto(detailId);

  if (loading) {
    return <h2>Loading...</h2>;
  }
  if (error) {
    console.log(error.message);
    return <h2>Internal Server Error</h2>;
  }
  const photo = data.photo;
  return <PhotoCard key={photo.id} {...photo} />;
};
