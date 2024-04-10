import React, { useState, useEffect } from "react";
import { Container, CharacterCard } from "../components";
import appwriteService from "../appwrite/config";

function AllCharacters() {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {}, []);
  appwriteService.getCharacters([]).then((characters) => {
    if (characters) {
      setCharacters(characters.documents);
    }
  });
  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {characters.map((character) => (
            <div key={character.$id} className="p-2 w-1/4">
              <CharacterCard {...character} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllCharacters;
