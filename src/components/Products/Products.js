import React from "react";
import { Link } from "react-router-dom";

function Products({ games }) {
  return (
    <div>
      {games.map((game) => (
        <ul key={game.id}>
          <li>
            <Link to={`/game/${game.id}`}>{game.nome}</Link>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default Products;
