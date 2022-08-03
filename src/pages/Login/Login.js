import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
        message: "Login ou senha inválido",
      });
    }
  };

  return (
    <div>
      <form onSubmit={loginSubmit}>
        <input
          type="text"
          name="email"
          placeholder="E-mail"
          onChange={valueInput}
        />
        <input
          type="password"
          name="password"
          placeholder="Senha"
          onChange={valueInput}
        />

        <button type="submit">Entrar</button>

        {status.type === "error" ? <p>{status.message}</p> : ""}
        {status.type === "success" ? <p>{status.message}</p> : ""}
      </form>
    </div>
  );
}

export default Login;
