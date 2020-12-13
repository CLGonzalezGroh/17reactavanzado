//DEPENDENCIES
import React from "react";

//COMPONENTS
import { Spinner } from "../components/Spinner";
import { ListOfFavs } from "../components/ListOfFavs";
import { Layout } from "../components/Layout";

// HOOKS
import { useGetFavs } from "../hooks/useGetFavs";

export const Favs = () => {
  const { loading, error, data = {} } = useGetFavs();

  if (loading) return <Spinner />;
  if (error) {
    (e) => {
      console.log(e);
      return <p>Error!</p>;
    };
  }

  const { favs } = data;
  return (
    <Layout
      title="Tus favoritos"
      subtitle="Aqui puedes encontrar tus favoritos"
    >
      <ListOfFavs favs={favs} />
    </Layout>
  );
};
