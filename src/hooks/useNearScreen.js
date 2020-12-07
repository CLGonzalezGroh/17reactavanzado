import { useState, useRef, useEffect } from "react";

export const useNearScreen = () => {
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

  return [show, ref];
};
