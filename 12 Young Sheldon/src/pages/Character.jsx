import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Character() {
  const [character, setCharacter] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.auth.userData);

  const isAuthor = character && userData ? character.userId === userData.$id : false;

  useEffect(() => {
    if (slug) {
      appwriteService.getCharacter(slug).then((character) => {
        if (character) setCharacter(character);
        else navigate("/");
      });
    } else navigate("/");
  }, [slug, navigate]);

  const deleteCharacter = () => {
    appwriteService.deleteCharacter(character.$id).then((status) => {
      if (status) {
        appwriteService.deleteFile(character.featuredImage);
        navigate("/");
      }
    });
  };

  return character ? (
    <div className="py-8">
      <Container>
        <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
          <img
            src={appwriteService.getFilePreview(character.featuredImage)}
            alt={character.name}
            className="rounded-xl"
          />

          {isAuthor && (
            <div className="absolute right-6 top-6">
              <Link to={`/edit-character/${character.$id}`}>
                <Button bgColor="bg-green-500" className="mr-3">
                  Edit
                </Button>
              </Link>
              <Button bgColor="bg-red-500" onClick={deleteCharacter}>
                Delete
              </Button>
            </div>
          )}
        </div>
        <div className="w-full mb-6">
          <h1 className="text-2xl font-bold">{character.name}</h1>
        </div>
        <div className="browser-css">{parse(character.description)}</div>
      </Container>
    </div>
  ) : null;
}
