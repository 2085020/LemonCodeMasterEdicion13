import React from "react";
interface UserContext {
    selectedCats: string[];
    selectCat: (cats:string[]) => void;
  }
  
  export const MyUserContext = React.createContext<UserContext>({
    selectedCats: [],
    selectCat: () => {},

  });