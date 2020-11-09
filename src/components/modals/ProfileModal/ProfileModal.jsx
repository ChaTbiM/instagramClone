import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useModalDispatch } from "../../../hooks/modalContext";
import useOnClickOutside from "../../../hooks/useOnClickOutside";
import StyledProfileModal from "./StyledProfileModal";

function ProfileModal({ left, top }) {
  const dispatch = useModalDispatch();
  const ref = useRef();

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  useOnClickOutside(ref, closeModal);

  return (
    <StyledProfileModal ref={ref} className="module" left={left} top={top}>
      <ul className="list">
        <Link className="list__item" to="/chatbim">
          Profile
        </Link>
        <Link className="list__item" to="/chatbim">
          Saved
        </Link>
        <Link className="list__item" to="/chatbim">
          Settings
        </Link>
        <Link className="list__item" to="/chatbim">
          Switch Account
        </Link>
        <hr />
        <Link className="list__item" to="/chatbim">
          Log Out
        </Link>
      </ul>
    </StyledProfileModal>
  );
}

ProfileModal.displayName = "ProfileModalName";

export default ProfileModal;
