import React, { useEffect, useRef } from "react";
import { useModalDispatch } from "../../../hooks/modalContext";
import useOnClickOutside from "../../../hooks/useOnClickOutside";
import StyledProfileModal from "./StyledProfileModal";

function ProfileModal({ left, top, profilePictureRef }) {
  const dispatch = useModalDispatch();
  const ref = useRef();

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  useOnClickOutside(ref, closeModal);

  return (
    <StyledProfileModal ref={ref} className="module" left={left} top={top}>
      <button onClick={closeModal}> close </button>
      <p>profile modal</p>
    </StyledProfileModal>
  );
}

export default ProfileModal;
