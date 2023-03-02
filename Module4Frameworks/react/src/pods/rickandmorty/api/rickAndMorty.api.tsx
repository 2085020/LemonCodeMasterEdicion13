export const searchAllByPage = (page) =>
  fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
    .then((response) => response.json())
    .then((json) => json.results);

export const searchAllByName = (name) =>
  fetch(`https://rickandmortyapi.com/api/character/?name=${name}`)
    .then((response) => response.json())
    .then((json) => json.results);
