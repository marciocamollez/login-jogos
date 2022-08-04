import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styles from "./Login.module.scss";

function Login() {
  const navigate = useNavigate();

  const database = [
    {
      username: "root",
      password: "labs",
    },
  ];

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const valueInput = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value });

  const loginSubmit = async (e) => {
    e.preventDefault();

    if (
      user.email === database[0].username &&
      user.password === database[0].password
    ) {
      setStatus({
        type: "success",
        message: "Login Realizado com Sucesso",
      });
      navigate("/dashboard");
    } else {
      setStatus({
        type: "error",
        message: "Login ou senha inválidos",
      });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formlogin}>
        <div>
          <img src="./logo.png" alt="Logo" title="Logo" />
        </div>
        <Form onSubmit={loginSubmit}>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              name="email"
              placeholder="E-MAIL"
              onChange={valueInput}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="password"
              name="password"
              placeholder="SENHA"
              onChange={valueInput}
            />
          </Form.Group>

          <Button type="submit">Entrar</Button>

          <div className={styles.checkGroup}>
            <label className={styles.switch}>
              <input type="checkbox" />
              <span className={styles.slider}></span>
            </label>
            <div className={styles.logado}>PERMANECER LOGADO</div>
          </div>

          <a href="/" className={styles.cadastro}>
            cadastrar
          </a>

          {status.type === "error" ? <p>{status.message}</p> : ""}
          {status.type === "success" ? <p>{status.message}</p> : ""}
        </Form>
      </div>
    </div>
  );
}

export default Login;
