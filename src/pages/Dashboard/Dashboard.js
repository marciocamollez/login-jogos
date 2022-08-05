import React, { useState, useEffect } from "react";
import axios from "axios";
import SliderProducts from "../../components/SliderProducts/SliderProducts";
import Sidebar from "../../components/Sidebar/Sidebar";
import styles from "./Dashboard.module.scss";

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
    <div className={styles.background}>
      <Sidebar />

      <section className={styles.highlights}>
        <h1>Destaques</h1>
        <div className={styles.line}></div>
      </section>

      <SliderProducts games={games} />
    </div>
  );
}

export default Dashboard;
