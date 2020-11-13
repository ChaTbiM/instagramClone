import { Bookmark, Settings, Shuffle, User } from "react-feather";
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
          <User className="list__item__icon" />
          <span className="list__item__text">Profile</span>
        </Link>
        <Link className="list__item" to="/chatbim">
          <Bookmark className="list__item__icon" />
          <span className="list__item__text">Saved</span>
        </Link>
        <Link className="list__item" to="/chatbim">
          <Settings className="list__item__icon" />
          <span className="list__item__text">Settings</span>
        </Link>
        <Link className="list__item" to="/chatbim">
          <Shuffle className="list__item__icon" />
          <span className="list__item__text">Switch Account</span>
        </Link>
        <hr />
        <Link className="list__item" to="/chatbim">
          <span className="list__item__text">Log Out</span>
        </Link>
      </ul>
    </StyledProfileModal>
  );
}

ProfileModal.displayName = "ProfileModalName";

export default ProfileModal;
