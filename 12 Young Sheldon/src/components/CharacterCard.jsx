import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function CharacterCard({ $id, name, featuredImage }) {
  return (
    <Link to={`/character/${$id}`}>
      <div className="w-full bg-gray-100 rounded-xl p-4">
        <div className="w-full justify-center mb-4">
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={name}
            className="rounded-xl"
          />
        </div>
        <h2 className="text-xl font-bold">{name}</h2>
      </div>
    </Link>
  );
}

export default CharacterCard;
