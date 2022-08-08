import React, { useContext } from "react";
import styles from "./Sidebar.module.scss";

import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

import { BsSearch } from "react-icons/bs";
import { BiHome } from "react-icons/bi";
import { FiUser } from "react-icons/fi";
import { AiOutlineRight } from "react-icons/ai";

import { Context } from "../../Context/AuthContext";
import { Link } from "react-router-dom";
import Header from "../Header/Header";

function Sidebar() {
  const { handleClose, show } = useContext(Context) || {};

  return (
    <div data-testid="test-sidemenu">
      <Header />

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
