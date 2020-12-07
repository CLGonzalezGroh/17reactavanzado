//DEPENDENCIES
import React from "react";

//COMPONENTS
import { Category } from "../Category";

//HOOKS
import { useFetch } from "../../hooks/useFetch";
import { useFixNav } from "../../hooks/useFixNav";

//STYLED COMPONENTS
import { List, Item } from "./styles";

const URL = "https://petgram-server-clgg.vercel.app/categories";
const SCROLL_Y_TRIGGER = 200;

export const ListOfCategories = () => {
  const [categories, loading, error] = useFetch(URL);
  const showFixed = useFixNav(SCROLL_Y_TRIGGER);

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {error && <h2>Internal Server Error</h2>}
      {loading
        ? "Loading..."
        : categories.map((category) => (
            <Item key={category.id}>
              <Category {...category} />
            </Item>
          ))}
    </List>
  );

  return (
    <>
      {showFixed && renderList(true)} {renderList()}
    </>
  );
};
