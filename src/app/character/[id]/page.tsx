import { Character } from "@/api/interfaces";
import Image from "next/image";
import styles from "./page.module.css";

const CharacterPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  const character = (await res.json()) as Character;

  return (
    <div className={styles.character}>
      <Image
        width={240}
        height={168}
        alt={character.name}
        src={character.image}
      />
      <h1>{character.name}</h1>
      <h3>Informations</h3>
      <dl>
        <dt>Gender</dt>
        <dd>{character.gender}</dd>
        <dt>Status</dt>
        <dd>{character.status}</dd>
        <dt>Specie</dt>
        <dd>{character.species}</dd>
        <dt>Origin</dt>
        <dd>{character.origin.name}</dd>
        <dt>Type</dt>
        <dd>{character.type}</dd>
      </dl>
    </div>
  );
};

export default CharacterPage;
