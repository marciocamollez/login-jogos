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

function Sidebar() {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className={styles.sidebar}>
      <Button variant="primary" onClick={handleShow}>
        Launch
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton className={styles.border}>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <InputGroup className="mb-3">
            <Button
              variant="outline-secondary"
              id="button-addon1"
              className={styles.sidebarBtn}
            >
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
                <a href="/">
                  <span>
                    <BiHome />
                    Home
                  </span>
                  <span>
                    <AiOutlineRight />
                  </span>
                </a>
              </li>
              <li>
                <a href="/">
                  <span>
                    <FiUser />
                    Perfil
                  </span>
                  <span>
                    <AiOutlineRight />
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default Sidebar;
