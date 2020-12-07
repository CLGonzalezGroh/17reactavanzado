import { useEffect, useState } from "react";

export const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(function () {
    setLoading(true);
    fetch("https://petgram-server-clgg.vercel.app/categories")
      .then((res) => res.json())
      .then((response) => {
        setCategories(response);
        setLoading(false);
      });
  }, []);

  return { categories, loading };
};
