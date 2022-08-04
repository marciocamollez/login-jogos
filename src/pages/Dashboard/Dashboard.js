import React, { useState, useEffect } from "react";
import axios from "axios";
import Products from "../../components/Products/Products";

function Dashboard() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const result = await axios(`http://localhost:3000/produtos`);
      setGames(result.data);
    };
    fetch();
  }, []);

  return (
    <div>
      Dashboard
      <Products games={games} />
    </div>
  );
}

export default Dashboard;
