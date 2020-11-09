import {
  faBookmark,
  faCogs,
  faRandom,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
          <FontAwesomeIcon className="list__item__icon" icon={faUserCircle} />
          <span className="list__item__text">Profile</span>
        </Link>
        <Link className="list__item" to="/chatbim">
          <FontAwesomeIcon className="list__item__icon" icon={faBookmark} />
          <span className="list__item__text">Saved</span>
        </Link>
        <Link className="list__item" to="/chatbim">
          <FontAwesomeIcon className="list__item__icon" icon={faCogs} />
          <span className="list__item__text">Settings</span>
        </Link>
        <Link className="list__item" to="/chatbim">
          <FontAwesomeIcon className="list__item__icon" icon={faRandom} />
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
