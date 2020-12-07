import React, { useEffect, useRef, useState } from "react";

import { MdFavoriteBorder } from "react-icons/md";
import { Article, Img, ImgWrapper, Button } from "./styles";

const DEFAULT_IMAGE =
  "https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png";

export const PhotoCard = ({ id, likes = 0, src }) => {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(
    function () {
      const observer = new window.IntersectionObserver((entries) => {
        const { isIntersecting } = entries[0];
        if (isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      });
      observer.observe(ref.current);
    },
    [ref]
  );
  return (
    <Article ref={ref}>
      {show && (
        <>
          <a href={`/details/${id}`}>
            <ImgWrapper>
              <Img src={(src = DEFAULT_IMAGE)} />
            </ImgWrapper>
          </a>
          <Button>
            <MdFavoriteBorder size="32px" /> {likes} likes!
          </Button>
        </>
      )}
    </Article>
  );
};
