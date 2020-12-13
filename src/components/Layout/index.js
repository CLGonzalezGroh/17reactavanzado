//DEPENDENCIES
import React from "react";
import { Helmet } from "react-helmet";

//STYLED COMPONENTS
import { Div, Title, Subtitle } from "./styles";

export const Layout = ({ children, title, subtitle }) => {
  return (
    <>
      <Helmet>
        {title && <title>{title} | Petgram 🐕</title>}
        {subtitle && <meta name="decription" content={subtitle} />}
      </Helmet>
      <Div>
        {title && <Title>{title}</Title>}
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
        {children}
      </Div>
    </>
  );
};
