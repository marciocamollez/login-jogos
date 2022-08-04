import React from "react";

function Products({ games }) {
  return (
    <div>
      {games.map((game) => (
        <ul key={game.id}>
          <li>{game.nome}</li>
        </ul>
      ))}
    </div>
  );
}

export default Products;
