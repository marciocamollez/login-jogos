import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Game() {
  const [game, setGame] = useState([]);

  let { id } = useParams(); //Pegar id pela URL com o react router dom v6

  useEffect(() => {
    const fetch = async () => {
      const result = await axios(`http://localhost:3000/produtos/${id}`);
      setGame(result.data);
    };

    fetch();
  }, []);

  return (
    <div>
      <div>{game.nome}</div>
      <div>{game.descricao}</div>
      <div>{game.preco}</div>
      <div>{game.tipo}</div>
      <div>
        <img src={game.img} alt={game.nome} title={game.nome} />
      </div>
    </div>
  );
}

export default Game;
