import React, { useState, useEffect } from "react";

import { Category } from "../Category";
import { useCategories } from "../../hooks/useCategories";

import { List, Item } from "./styles";

export const ListOfCategories = () => {
  const [showFixed, setShowFixed] = useState(false);

  const { categories, loading } = useCategories();

  useEffect(
    function () {
      const onScroll = (e) => {
        const newShowFixed = window.scrollY > 200;
        showFixed !== newShowFixed && setShowFixed(newShowFixed);
      };
      document.addEventListener("scroll", onScroll);

      return () => document.removeEventListener("scroll", onScroll);
    },
    [showFixed]
  );

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {loading
        ? "Cargando..."
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
