import React, { useContext } from "react";
import { Context } from "../../Context/AuthContext";
import styles from "./Header.module.scss";

import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";

function Header() {
  const { handleShow } = useContext(Context) || {};

  return (
    <>
      <header className={styles.head} data-testid="test-header">
        <div>
          <button onClick={handleShow} className={styles.btnMenuHeader}>
            <GiHamburgerMenu />
          </button>
          <Link to="/dashboard">
            <img src="/logo.png" alt="My Collection" title="My Collection" />
          </Link>
        </div>

        <div>
          <button type="button" className={styles.btnAddToCart}>
            <MdOutlineShoppingCart />
            <span className="position-absolute top-10 start-90 translate-middle badge rounded-pill bg-danger">
              4<span className="visually-hidden">products</span>
            </span>
          </button>

          <Link to="/dashboard">
            <button type="button" className={styles.btnProfile}>
              <FiUser />
            </button>
          </Link>
        </div>
      </header>
    </>
  );
}

export default Header;
