import React from "react";
import { MainMenuContainer } from "./style";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompass,
  faEnvelope,
  faHeart,
  faHome,
  faSearch,
  faUserCog,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function MainMenu() {
  return (
    <MainMenuContainer>
      <ul className="list">
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
          <FontAwesomeIcon className="list__icons__item" icon={faUserCog} />
        </div>
      </ul>
    </MainMenuContainer>
  );
}

export default MainMenu;
