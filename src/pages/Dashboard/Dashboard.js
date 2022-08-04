import React, { useState, useEffect } from "react";
import axios from "axios";
import Products from "../../components/Products/Products";

function Dashboard() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchSearch = async () => {
      const result = await axios(`http://localhost:3000/produtos`);
      setGames(result.data);
      console.log(result.data);
    };
    fetchSearch();
  }, []);

  return (
    <div>
      Dashboard
      <Products games={games} />
    </div>
  );
}

export default Dashboard;
