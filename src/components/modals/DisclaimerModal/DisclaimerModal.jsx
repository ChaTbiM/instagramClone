import React, { useEffect } from "react";
import { createPortal } from "react-dom";

// 'modal-root' is a sibling to 'app-root'
const modalRoot = document.getElementById("disclaimer");

export default function DisclaimerModal({ isOpen, children }) {
  // element to which the modal will be rendered
  const el = document.createElement("div");

  useEffect(() => {
    // append to root when the children of Modal are mounted
    modalRoot.appendChild(el);

    // do a cleanup
    return () => {
      modalRoot.removeChild(el);
    };
  }, [el]);

  return (
    isOpen &&
    createPortal(
      // child element
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          //   padding: "100px",
          backgroundColor: "rgba(0,0,0,0.6)",
          zIndex: 99999999,
        }}
      >
        <div
          style={{
            width: "50%",
            background: "white",
            padding: "50px",
            textAlign: "center",
            position: "relative",
            fontSize: "20px",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
        >
          <h1>DISCLAIMER : THIS IS FOR LEARNING PURPOSE ONLY ! </h1>
          <p>
            P.S : not trying to overcome instagram !
            <span role="img" aria-label="jsx-a11y/accessible-emoji">
              &#128540;
            </span>
            <span aria-label="jsx-a11y/accessible-emoji" role="img">
              &#128514;
            </span>
          </p>
          <div style={{ marginTop: "1rem" }}>{children}</div>
        </div>
      </div>,
      // target container
      el
    )
  );
}
