//DEPENDENCIES
import React from "react";

//COMPONENTS
import { PhotoCard } from "../PhotoCard";

//HOOKS
import { useGetPhotos } from "../../hooks/useGetPhotos";

export const ListOfPhotoCards = ({ categoryId }) => {
  const { loading, error, data } = useGetPhotos(categoryId);

  if (loading) {
    return <h2>Loading...</h2>;
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
