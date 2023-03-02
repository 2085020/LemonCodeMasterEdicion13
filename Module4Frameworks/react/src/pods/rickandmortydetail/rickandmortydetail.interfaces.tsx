export interface characterInterface {
    id: number,
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    origin: {
      name: string,
    },
    location: {
      name: string,
    },
    image: string,
  }

  export interface vmcharacterInterface {
    id: number,
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    origin: string,
    location: string,
    image: string,
  }
export const createEmptyCharacter = ():vmcharacterInterface => ({
    id:0,
    name:"",
    status:"",
    species:"",
    type:"",
    gender:"",
    origin: "",
    location:"",
    image:""
});