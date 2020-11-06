import React from "react";
import ProfilePicture from "../Profile/ProfilePicture/ProfilePicture";
import Suggestions from "../Suggestions/Suggestions/Suggestions";
import { StyledSideBar } from "./StyledSideBar";
import WithInPortal from "../modals/WithInPortal";
import ProfileModal from "../modals/ProfileModal/ProfileModal";
import CreateModals from "../modals/CreateModals";

function SideBar() {
  const Modal = WithInPortal(ProfileModal);
  return (
    <StyledSideBar>
      {/* Version HOC  --- I can pass props/data but it is not elegant*/}
      <Modal />

      {/* Version Children --- I can pass props/data but is more elegant as I can control wich Component to pass data to */}
      <CreateModals>
        <ProfileModal></ProfileModal>
      </CreateModals>

      <div className="profile">
        <ProfilePicture className="profile__picture" size="large" />
        <div className="profile__text">
          <p className="profile__text__username">chatbim</p>
          <p className="profile__text__name">mustapha chatbi</p>
        </div>
        <a href="#" className="profile__switch">
          Switch
        </a>
      </div>
      <Suggestions />
    </StyledSideBar>
  );
}

export default SideBar;
