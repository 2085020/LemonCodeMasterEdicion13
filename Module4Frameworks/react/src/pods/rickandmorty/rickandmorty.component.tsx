import { Button, Card, IconButton, TextField } from "@mui/material";
import React from "react";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { Link } from "react-router-dom";
import { Character } from "./interface";
import { searchAllByPage, searchAllByName } from "./api/rickAndMorty.api";
import { useDebounce } from "./useDeounce.hook";



export const RickMortyComponent: React.FC = () => {
  const [characters, setCaracters] = React.useState<Character[]>([]);
  const [filter, setFilter] = React.useState<string>("");
  const [page, setPage] = React.useState<number>(1);
  const [debounce, setDebounce] = React.useState<boolean>(false);

  const debouncedSearchTerm: string = useDebounce<string>(filter, 500);

  React.useEffect(() => {
    search();
  }, [page]);

  React.useEffect(() => {
    if (debounce) {
      searchAllByName(debouncedSearchTerm).then((characters) => setCaracters(characters));
    }
  }, [debouncedSearchTerm]);

  
  const search = () => {
    searchAllByPage(page).then((characters) => setCaracters(characters));
  }

  const searchByName = () => {
    searchAllByName(filter).then((characters) => setCaracters(characters));
  }

  const navigate = (number) => (event) => {
    const nextPage = page +number;

    if (nextPage > 0) {
        setPage(nextPage);
    }
  }

  const handleCheckDeounce = () => {
    setDebounce(!debounce);
  }

  const changeFilter = (event) => {
    setFilter(event.target.value);
  }

  return (
    <div className="centrado">
      <div className="centerBox">
        <h1>Rick and Morty listing</h1>
        <Card
        className="SearchBox"
        sx={{ padding: "10px", marginBottom: "20px", width: "400px" }}
      >
        <TextField
          id="outlined-basic"
          label="Character"
          variant="outlined"
          value={filter}
          onChange={changeFilter}
        />
        <Button sx={{ marginTop: "10px", marginLeft: "20px" }} variant="contained" onClick={searchByName} disabled={debounce}>
          Search
        </Button>
        <p>
          Use Debounce <input type="checkbox" checked={debounce} onChange={handleCheckDeounce}></input>
        </p>
      </Card>
        <div className="header">
          <div className="col">id</div>
          <div className="col">name</div>
          <div className="col">image</div>
        </div>
        {characters && characters.map((character) => {
            return (
                <div className="row" key={character.id}>
                    <div className="col">{character.id}</div>
                    <div className="col">
                        <Link to={`/rickmortydetail/${character.id}`}>{character.name}</Link>
                    </div>
                    <div className="col">
                        <img src={character.image} />
                    </div>
                </div>
            );
        })}
        <div>
            <IconButton onClick={navigate(-1)}>
            <NavigateBeforeIcon className="link" />
            </IconButton>
            <TextField disabled={true} value={page}/>
            <IconButton onClick={navigate(1)}>
            <NavigateNextIcon className="link" />
            </IconButton>
            
        </div>
      </div>
    </div>
  );
};
