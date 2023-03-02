import {
  characterInterface,
  vmcharacterInterface,
  createEmptyCharacter,
} from "./rickandmortydetail.interfaces";

export const mapCharacter = (obj:characterInterface):vmcharacterInterface => {
  return {
    id: obj.id,
    name: obj.name,
    status: obj.status,
    species: obj.species,
    type: obj.type,
    gender: obj.gender,
    origin: obj.origin.name,
    location: obj.location.name,
    image: obj.image,
  };
};
