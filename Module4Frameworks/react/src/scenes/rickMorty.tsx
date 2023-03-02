import React from "react";
import { RickMortyLayout } from "../layouts";
import { RickMortyContainer } from "../pods";

export const RickMorty: React.FC = () => {
  return (
    <RickMortyLayout>
      <RickMortyContainer />
    </RickMortyLayout>
  );
};
