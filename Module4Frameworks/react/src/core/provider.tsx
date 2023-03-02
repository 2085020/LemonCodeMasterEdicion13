import React from "react";
import { MyUserContext } from "./context";

interface Props {
  children?: React.ReactNode;
}

export const MyUserProvider: React.FC<Props> = ({ children }) => {
  const [filter, setFilter] = React.useState("lemoncode");
  const [page, setPage] = React.useState(0);
  return (
    <MyUserContext.Provider value={{ filter, changeFilter: setFilter, page, setPage }}>
      {children}
    </MyUserContext.Provider>
  );
};
