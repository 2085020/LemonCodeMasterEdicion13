import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  vmcharacterInterface,
  createEmptyCharacter,
} from "./rickandmortydetail.interfaces";
import { mapCharacter } from "./rickandmortydetail.mapper";

export const RickMortyDetailComponent: React.FC = () => {
  const { id } = useParams();
  const [character, setCharacter] = React.useState<vmcharacterInterface>(
    createEmptyCharacter()
  );

  React.useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((json) => setCharacter(mapCharacter(json)));
  }, []);

  console.log(character);
  return (
    <div className="centrado">
      <div className="centerBox">
        <Card>
            <CardHeader title={character.name} />
            <CardMedia component="img" image={character.image}></CardMedia>   
            <CardContent>
            <ul>
                <li>name:{character.name}</li>
                <li>status:{character.status}</li>
                <li>species:{character.species}</li>
                <li>type:{character.type}</li>
                <li>gender:{character.gender}</li>
                <li>origin:{character.origin}</li>
                <li>location:{character.location}</li>
            </ul>
            </CardContent>
        </Card>
        <Link to="/rickmorty">Back to list page</Link>
      </div>
    </div>
  );
};
