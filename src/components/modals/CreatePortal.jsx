import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { useModalState } from "../../hooks/modalContext";
const modalRoot = document.getElementById("modal");

function CreatePortal({ children }) {
  const { isOpen } = useModalState();
  const container = document.createElement("div");

  useEffect(() => {
    modalRoot.appendChild(container);

    return () => {
      modalRoot.removeChild(container);
    };
  }, [container]);

  return isOpen && createPortal(children, container);
}

export default React.memo(CreatePortal);
