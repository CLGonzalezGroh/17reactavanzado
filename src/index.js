//DEPENDENCIES
import React from "react";
import ReactDOM from "react-dom";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
  from,
  HttpLink,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

//APP
import App from "./App";

//GLOBAL STATE
import Context from "./Context";

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = window.sessionStorage.getItem("token");
  if (token) {
    operation.setContext({
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  }
  return forward(operation);
});

const errorMiddleware = onError(({ networkError }) => {
  if (networkError && networkError.result.code === "invalid_token") {
    window.sessionStorage.removeItem("token");
    window.location = "./user";
  }
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([
    authMiddleware,
    new HttpLink({
      uri: "https://petgram-server-clgg.vercel.app/graphql",
    }),
  ]),
});

ReactDOM.render(
  <Context.Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>,

  document.getElementById("App")
);
