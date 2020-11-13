import React, { useRef, useState, useLayoutEffect } from "react";
import { StyledMainMenu } from "./StyledMainMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompass,
  faEnvelope,
  faHeart,
  faHome,
  faSearch,
  // faUserCog,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import ProfileModal from "../../modals/ProfileModal/ProfileModal";
import CreatePortal from "../../modals/CreatePortal";
import ProfilePicture from "../../Profile/ProfilePicture/ProfilePicture";
import { useModalDispatch, useModalState } from "../../../hooks/modalContext";

function MainMenu() {
  const [topPosition, setTopPosition] = useState(0);
  const dispatch = useModalDispatch();
  const { isOpen } = useModalState();
  const profilePictureRef = useRef(null);
  const navRef = useRef(null);

  useLayoutEffect(() => {
    if (navRef) {
      let top = navRef.current.getBoundingClientRect().height;
      setTopPosition(top + 1);
    }
  }, [profilePictureRef, navRef, setTopPosition]);

  const openModal = () => {
    dispatch({ type: "OPEN_MODAL" });
  };

  return (
    <StyledMainMenu>
      <ul className="list" ref={navRef}>
        <li className="list__item logo">instagram</li>
        <li className="list__item search__bar">
          <FontAwesomeIcon className="search__icon" icon={faSearch} />
          <input
            className="list__item__input search"
            placeholder="search"
            type="text"
          />
        </li>
        <div className="list__icons">
          <Link to="/">
            <FontAwesomeIcon className="list__icons__item" icon={faHome} />
          </Link>
          <Link to="/messages">
            <FontAwesomeIcon className="list__icons__item" icon={faEnvelope} />
          </Link>
          <Link to="/people">
            <FontAwesomeIcon className="list__icons__item" icon={faCompass} />
          </Link>

          <FontAwesomeIcon className="list__icons__item" icon={faHeart} />
          {/* <FontAwesomeIcon className="list__icons__item" icon={faUserCog} /> */}
          <span onClick={openModal} className=" profile__picture__active">
            <ProfilePicture
              ref={profilePictureRef}
              // className={isOpen ? "profile__picture__active" : ""}
              isActive={isOpen}
              size="small"
            />
            {isOpen && <div className="arrow-up"></div>}
          </span>
          <CreatePortal>
            {topPosition && (
              <ProfileModal top={topPosition} className="profile__modal" />
            )}
          </CreatePortal>
        </div>
      </ul>
    </StyledMainMenu>
  );
}

export default MainMenu;
