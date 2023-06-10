import { RickAndMortyAPIResponse } from "../api/interfaces";
import CharacterListFilterPage from "./CharacterListFilterPage";

const HomePage = async () => {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const data = (await res.json()) as RickAndMortyAPIResponse;
  const results = data.results.sort((a, b) =>
    a.name < b.name ? -1 : a.name > b.name ? 1 : 0
  );

  return <CharacterListFilterPage results={results} />;
};

export default HomePage;
