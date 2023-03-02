import React from "react";
import { RickMortyLayout } from "../layouts";
import { RickMortyDetailContainer } from "../pods/rickandmortydetail";

export const RickMortyDetail : React.FC = () => {
 return (
    <RickMortyLayout>
      <RickMortyDetailContainer />
    </RickMortyLayout>
  );
 }