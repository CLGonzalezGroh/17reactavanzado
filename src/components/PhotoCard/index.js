//DEPENDENCIES
import React from "react";
import { Link } from "@reach/router";

//COMPONENTS
import { FavButton } from "../FavButton";

//HOOKS
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useNearScreen } from "../../hooks/useNearScreen";
import { useToggleLike } from "../../hooks/useToggleLike";

//STYLED COMPONENTS
import { Article, Img, ImgWrapper } from "./styles";

const DEFAULT_IMAGE =
  "https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png";

export const PhotoCard = ({ id, likes = 0, src }) => {
  const key = `like-${id}`;
  const [liked, setLiked] = useLocalStorage(key, false);
  const [show, ref] = useNearScreen();
  const toggleLike = useToggleLike();

  const handleFavClick = ({ id }) => {
    !liked && toggleLike({ variables: { input: { id } } });
    setLiked(!liked);
  };

  return (
    <Article ref={ref}>
      {show && (
        <>
          <Link to={`/details/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>
          <FavButton
            likes={likes}
            liked={liked}
            onClick={() => handleFavClick({ id })}
          />
        </>
      )}
    </Article>
  );
};
