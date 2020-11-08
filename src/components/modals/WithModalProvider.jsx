import React from "react";
import { ModalProvider } from "../../hooks/modalContext";

function WithModalProvider(Component) {
  return ({ children }) => {
    return (
      <ModalProvider>
        <Component>{children}</Component>
      </ModalProvider>
    );
  };
}

export default WithModalProvider;
