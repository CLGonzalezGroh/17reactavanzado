//DEPENDENCIES
import React from "react";

//COMPONENTS
import { PhotoCard } from "../PhotoCard";
import { Spinner } from "../Spinner";

//HOOKS
import { useGetPhoto } from "../../hooks/useGetPhoto";

export const PhotoCardDetails = ({ detailId }) => {
  const { loading, error, data } = useGetPhoto(detailId);

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    console.log(error.message);
    return <h2>Internal Server Error</h2>;
  }
  const photo = data.photo;
  return <PhotoCard key={photo.id} {...photo} />;
};
