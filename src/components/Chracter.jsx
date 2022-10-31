import React from "react";

function Chracter({ character }) {
  return (
    <div className="text-center p-5">
      <h3>{character.name}</h3>
      <img className="img-fluid rounded-pill" src={character.image} alt={character.name}></img>
      <p>{character.origin.name}</p>
    </div>
  );
}

export default Chracter;
