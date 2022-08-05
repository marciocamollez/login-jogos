import React, { useState, useEffect } from "react";
import axios from "axios";
import SliderProducts from "../../components/SliderProducts/SliderProducts";
import Sidebar from "../../components/Sidebar/Sidebar";
import BestSellers from "../../components/BestSellers/BestSellers";
import styles from "./Dashboard.module.scss";

function Dashboard() {
  const [games, setGames] = useState([]);
  const [best, setBest] = useState([]);

  useEffect(() => {
    const fetchSlider = async () => {
      const result = await axios(`http://localhost:3000/produtos`);
      setGames(result.data);
    };
    fetchSlider();
  }, []);

  useEffect(() => {
    const fetchBestSellers = async () => {
      const result = await axios(`http://localhost:3000/mais-vendidos`);
      setBest(result.data);
    };
    fetchBestSellers();
  }, []);

  return (
    <div className={styles.background}>
      <Sidebar />

      <section className={styles.highlights}>
        <h1>Destaques</h1>
        <div className={styles.line}></div>
      </section>

      <SliderProducts games={games} />

      <section className={styles.highlights}>
        <h2>Mais Vendidos</h2>
        <div className={styles.line}></div>
      </section>

      <BestSellers best={best} />
    </div>
  );
}

export default Dashboard;
