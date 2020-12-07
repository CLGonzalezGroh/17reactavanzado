import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(function () {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((response) => {
        setData(response);
        setLoading(false);
      })
      .catch((e) => {
        setError(e);
        setLoading(false);
        console.log(e);
      });
  }, []);

  return [data, loading, error];
};
