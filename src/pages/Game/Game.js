import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Sidebar from "../../components/Sidebar/Sidebar";
import styles from "./Game.module.scss";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

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
    <div className={styles.background}>
      <Sidebar />

      <div className={styles.imageGame}>
        <picture>
          <figcaption>{game.nome}</figcaption>
          <source media="(max-width:650px)" srcSet={game.img} />
          <img src={game.imgHD} alt={game.nome} title={game.nome} />
        </picture>
      </div>

      <Container>
        <Row>
          <Col>
            <div className={styles.breadcrumb}>
              <p>
                <Link to="/dashboard">HOME</Link> / {game.tipo} /{" "}
                <span>{game.nome}</span>
              </p>
              <div className={styles.linha}></div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm={8}>
            <div className={styles.desc}>
              <p>{game.descricao}</p>
            </div>
          </Col>
          <Col sm={4}>
            <div className={styles.desc}>
              <p>
                <span>TIPO:</span>
              </p>
              <p>{game.tipo}</p>
            </div>

            <div className={styles.desc}>
              <p>
                <span>PREÇO:</span>
              </p>
              <p>R$ {game.preco}</p>
            </div>

            <div className={styles.btnBuy}>
              <Link to="">
                <Button>Adicionar ao Carrinho</Button>
              </Link>
              <Link to="">
                <Button>Comprar</Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Game;
