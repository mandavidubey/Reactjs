import React, { useEffect, useState } from "react";
import { Container, CharacterForm } from "../components";
import appwriteService from "../appwrite/config";
import { useNavigate, useParams } from "react-router-dom";

function EditCharacter() {
  const [character, setCharacters] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      appwriteService.getCharacter(slug).then((character) => {
        if (character) {
          setCharacters(character);
        }
      });
    } else {
      navigate("/");
    }
  }, [slug, navigate]);
  return character ? (
    <div className="py-8">
      <Container>
        <CharacterForm character={character} />
      </Container>
    </div>
  ) : null;
}

export default EditCharacter;
