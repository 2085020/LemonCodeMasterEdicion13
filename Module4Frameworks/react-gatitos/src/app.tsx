import React from "react";
import { Layout } from "./layout";
import { MyUserProvider } from "./provider";


export const App = () => {
  return (
    <MyUserProvider>
    <Layout/>
    </MyUserProvider>
  );
};
