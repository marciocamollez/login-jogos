import React, { useState, useEffect } from "react";
import axios from "axios";
import Products from "../../components/Products/Products";
import Sidebar from "../../components/Sidebar/Sidebar";

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
      <Sidebar />
      <Products games={games} />
    </div>
  );
}

export default Dashboard;
