import React from "react";
import usePageLoading from "../hooks/usePageLoading";
import ProgressBar from "../components/ProgressBar/ProgressBar";

function Profile() {
  const [pageLoading] = usePageLoading();
  return <div>{pageLoading && <ProgressBar />} Welcome to Your profile</div>;
}

export default Profile;
