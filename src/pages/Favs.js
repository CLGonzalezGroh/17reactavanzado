//DEPENDENCIES
import React from "react";

//COMPONENTS
import { Spinner } from "../components/Spinner";
import { ListOfFavs } from "../components/ListOfFavs";

// HOOKS
import { useGetFavs } from "../hooks/useGetFavs";

export const Favs = () => {
  const { loading, error, data } = useGetFavs();

  if (loading) return <Spinner />;
  if (error) {
    window.location = "/user";
  }

  const { favs } = data;
  return <ListOfFavs favs={favs} />;
};
