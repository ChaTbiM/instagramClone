import React, { useEffect } from "react";
import { createPortal } from "react-dom";

// 'modal-root' is a sibling to 'app-root'
const modalRoot = document.getElementById("disclaimer");

function DisclaimerModal({ isOpen, children }) {
  const el = document.createElement("div");

  useEffect(() => {
    modalRoot.appendChild(el);

    return () => {
      modalRoot.removeChild(el);
    };
  }, [el]);

  return (
    isOpen &&
    createPortal(
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          backgroundColor: "rgba(0,0,0,0.6)",
          zIndex: 99999999,
        }}
      >
        <div className="disclaimer">
          <h1>DISCLAIMER : THIS IS FOR LEARNING PURPOSE ONLY ! </h1>

          <p>
            important : for now it works only on local development env , I will
            set up server SOON !
          </p>
          <p>
            P.S : not trying to overcome instagram !
            <span role="img" aria-label="jsx-a11y/accessible-emoji">
              &#128540;
            </span>
            <span aria-label="jsx-a11y/accessible-emoji" role="img">
              &#128514;
            </span>
          </p>

          <div className="disclaimer__content">{children}</div>
        </div>
      </div>,
      el
    )
  );
}
export default DisclaimerModal;
