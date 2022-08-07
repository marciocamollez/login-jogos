import React, { useState } from "react";
import styles from "./Sidebar.module.scss";

import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

import { BsSearch } from "react-icons/bs";
import { BiHome } from "react-icons/bi";
import { FiUser } from "react-icons/fi";
import { AiOutlineRight } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineShoppingCart } from "react-icons/md";

import { Link } from "react-router-dom";

function Sidebar() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
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

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton className={styles.border}>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <InputGroup className="mb-3">
            <Button id="button-addon1" className={styles.sidebarBtn}>
              <BsSearch />
            </Button>
            <Form.Control
              aria-label="Example text with button addon"
              aria-describedby="basic-addon1"
              placeholder="BUSCAR"
              className={styles.sidebarInput}
            />
          </InputGroup>

          <nav>
            <ul>
              <li>
                <Link to="/dashboard">
                  <span>
                    <BiHome />
                    Home
                  </span>
                  <span>
                    <AiOutlineRight />
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/dashboard">
                  <span>
                    <FiUser />
                    Perfil
                  </span>
                  <span>
                    <AiOutlineRight />
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default Sidebar;
