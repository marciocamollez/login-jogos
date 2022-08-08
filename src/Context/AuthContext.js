import React, { useState, createContext } from "react";

const Context = createContext();

function AuthProvider({ children }) {
  const [show, setShow] = useState(false);

  function handleClose() {
    setShow(false);
  }

  function handleShow() {
    setShow(true);
  }

  return (
    <Context.Provider
      value={{
        handleClose,
        handleShow,
        show,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, AuthProvider };
