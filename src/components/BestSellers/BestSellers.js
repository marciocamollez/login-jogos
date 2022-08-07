import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./BestSellers.module.scss";

function BestSellers({ best }) {
  return (
    <div>
      <section className={styles.maisVendidos} data-testid="test-bestsellers">
        {best &&
          best.map((game) => (
            <div key={game.id} className={styles.container}>
              <div className={styles.boxImage}>
                <img src={game.img} alt={game.nome} title={game.nome} />
                <div className={styles.boxOverlay}>
                  <div className={styles.boxHide}>
                    <div>
                      <p>{game.nome}</p>
                      <p className={styles.preco}>{game.preco}</p>
                    </div>
                    <div className={styles.btnFooter}>
                      <Link to={`/game/${game.id}`}>
                        <Button>Add to cart</Button>
                      </Link>
                      <Link to={`/game/${game.id}`}>
                        <Button>Detalhes</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </section>
    </div>
  );
}

export default BestSellers;
