import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, CharacterCard } from "../components";

function Home() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    appwriteService.getCharacters().then((characters) => {
      if (characters) {
        setCharacters(characters.documents);
      }
    });
  }, []);

  if (characters.length === 0) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <h1 className="text-2xl font-bold hover:text-gray-500">
                Login to read Characters
              </h1>
            </div>
          </div>
        </Container>
      </div>
    );
  }
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

export default Home;
