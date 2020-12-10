//DEPENDENCIES
import React from "react";

//COMPONENTS
import { PhotoCard } from "../PhotoCard";
import { Spinner } from "../Spinner";

//HOOKS
import { useGetPhotos } from "../../hooks/useGetPhotos";

export const ListOfPhotoCards = ({ categoryId }) => {
  const { loading, error, data } = useGetPhotos(categoryId);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    console.log(error.message);
    return <h2>Internal Server Error</h2>;
  }

  return (
    <ul>
      {data.photos.map((photo) => (
        <PhotoCard key={photo.id} {...photo} />
      ))}
    </ul>
  );
};
