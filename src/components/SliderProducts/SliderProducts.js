import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./SliderProducts.module.scss";

function SliderProducts({ games }) {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={2000}
        infinite={true}
      >
        {games.map((game) => (
          <section key={game.id} className={styles.slider}>
            <div>
              <Link to={`/game/${game.id}`}>
                <img src={game.img} alt={game.nome} title={game.nome} />
              </Link>
            </div>
          </section>
        ))}
      </Carousel>
    </div>
  );
}

export default SliderProducts;
