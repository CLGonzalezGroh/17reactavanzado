//DEPENDENCIES
import React from "react";
import PropTypes from "prop-types";

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

FavButton.propTypes = {
  liked: PropTypes.bool,
  likes: PropTypes.number,
  onClick: PropTypes.func,
};
