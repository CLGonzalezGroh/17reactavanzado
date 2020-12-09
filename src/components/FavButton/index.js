//DEPENDENCIES
import React from "react";

//STYLED COMPONENTS
import { Button } from "./style";

//ICONS
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

export const FavButton = ({ likes, liked, onClick }) => {
  const Icon = liked ? MdFavorite : MdFavoriteBorder;

  return (
    <Button onClick={onClick}>
      <Icon size="32px" /> {likes} likes!
    </Button>
  );
};
