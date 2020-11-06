import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modal");

export default function CreateModals({ children }) {
  const [isOpen, setIsOpen] = useState(true); // I ll refactor this to context

  const container = document.createElement("div");

  useEffect(() => {
    modalRoot.appendChild(container);

    return () => {
      modalRoot.removeChild(container);
    };
  }, [container]);

  return isOpen && createPortal(children, container);
}
