import React from "react";

interface Props {
    children?: React.ReactNode;
  }

export const RickMortyLayout: React.FC<Props> = ({children}) => (
    <>
    <div className="rick">{children}</div>
    </>
)