import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("portal");

export default function WithInPortal(Component) {
  const [isOpen, setIsOpen] = useState(true); // I ll refactor this to context

  return function WithInPortalComponent({ ...props }) {
    const container = document.createElement("div");
    useEffect(() => {
      modalRoot.appendChild(container);

      return () => {
        modalRoot.removeChild(container);
      };
    }, [container]);

    return (
      isOpen &&
      createPortal(
        <>
          <Component {...props} />
        </>,
        container
      )
    );
  };
}
