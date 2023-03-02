import React from "react";
import { MyUserContext } from "./context";

interface Props {
  children?: React.ReactNode;
}

export const MyUserProvider: React.FC<Props> = ({ children }) => {
  const [selectedCats, setSelectedCats] = React.useState([] as string[]);
  return (
    <MyUserContext.Provider value={{ selectedCats, selectCat: setSelectedCats }}>
      {children}
    </MyUserContext.Provider>
  );
};
