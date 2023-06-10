"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Character } from "../api/interfaces";
import styles from "@/styles/Home.module.css";

const CharacterListFilterPage: React.FC<{ results: Character[] }> = ({
  results,
}) => {
  const [filter, setFilter] = useState(
    typeof localStorage !== "undefined"
      ? localStorage.getItem("search") || ""
      : ""
  );
  const filteredResults = results.filter((result) =>
    result.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <main>
      <header className={styles.header}>
        <Image src="/logo.png" alt="Rick and Morty" width={240} height={168} />
        <input
          type="search"
          placeholder="Filter by name..."
          value={filter}
          onChange={(e) => {
            setFilter(e.currentTarget.value);
            localStorage.setItem("search", e.currentTarget.value);
          }}
        />
      </header>

      <ul className={styles.characterList}>
        {filteredResults.map(({ id, name, image, species }) => {
          return (
            <li key={id}>
              <a href={`/character/${id}`}>
                <Image src={image} alt={name} width={240} height={168} />
                <figcaption>
                  <h2>{name}</h2>
                  <small>{species}</small>
                </figcaption>
              </a>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default CharacterListFilterPage;
