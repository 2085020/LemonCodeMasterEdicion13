import React from "react";
interface UserContext {
    filter: string;
    changeFilter: (username:string) => void;
    page: number;
    setPage: (page:number) => void;
  }
  
  export const MyUserContext = React.createContext<UserContext>({
    filter: "lemoncode",
    changeFilter: () => {},
    page: 0,
    setPage: () => {},
  });