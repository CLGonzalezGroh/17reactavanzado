//DEPENDENCIES
import React from "react";

//STYLED COMPONENTS
import { Link, Image, Grid } from "./styles";

export const ListOfFavs = ({ favs = [] }) => {
  return (
    <Grid>
      {favs.map((item) => (
        <Link key={item.id} to={`/details/${item.id}`}>
          <Image src={item.src} />
        </Link>
      ))}
    </Grid>
  );
};
