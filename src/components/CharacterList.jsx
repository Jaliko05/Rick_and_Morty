import React from "react";
import { useEffect, useState } from "react";
import Character from "../components/Chracter";

function NavPage(props) {
  return (
    <header className="d-flex justify-content-between align-items-center ">
      <p>page: {props.page}</p>
      <div className="col-md-3 d-flex justify-content-between align-items-center py-4">
        {
          props.page != 1 ? 
            <button
              className="btn btn-primary bn-sm"
              onClick={() => props.setPage(props.page - 1)}
            >
              {" "}
              page: {props.page - 1}{" "}
            </button>
          : <button
          className="btn  bn-sm"></button>
        }

        <button
          className="btn btn-primary bn-sm"
          onClick={() => props.setPage(props.page + 1)}
        >
          {" "}
          page: {props.page + 1}{" "}
        </button>
      </div>
    </header>
  );
}

function CharacterList() {
  const [characters, setcharacters] = useState([]);
  const [loading, setloading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const data = await response.json();
      setloading(false);
      setcharacters(data.results);
    }
    fetchData();
  }, [page]);

  return (
    <div className="container">
      <NavPage page={page} setPage={setPage} />

      {loading ? (
        <h1>Loading</h1>
      ) : (
        <div className="row">
          {characters.map((character) => {
            return (
              <div className="col-md-4" key={character.id}>
                <Character character={character} />
              </div>
            );
          })}
        </div>
      )}
      <NavPage page={page} setPage={setPage} />
    </div>
  );
}

export default CharacterList;
