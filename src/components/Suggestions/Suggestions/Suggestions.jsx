import React from "react";
import { Link } from "react-router-dom";
import Suggestion from "../Suggestion/Suggestion";
import { StyledSuggestions } from "./StyledSuggestions";

function Suggestions() {
  const temp = Array.from(Array(5).keys());

  const renderSuggstionsList = () =>
    temp.map((el, index) => <Suggestion key={`suggestion-${index}`} />);

  return (
    <StyledSuggestions>
      <div className="header">
        <p className="header__title">Suggestions For You</p>
        <Link className="header__all" to="/people">
          <p>See ALL</p>
        </Link>
      </div>
      {renderSuggstionsList()}

      <div className="footer">
        <Link className="footer__link" to="#">
          About
        </Link>
        <Link className="footer__link" to="#">
          Help
        </Link>
        <Link className="footer__link" to="#">
          Press
        </Link>
        <Link className="footer__link" to="#">
          API
        </Link>
        <Link className="footer__link" to="#">
          Jobs
        </Link>
        <Link className="footer__link" to="#">
          Privacy
        </Link>
        <Link className="footer__link" to="#">
          Terms
        </Link>
        <Link className="footer__link" to="#">
          Locations
        </Link>
        <Link className="footer__link" to="#">
          Top Accounts
        </Link>
        <Link className="footer__link" to="#">
          Hashtags
        </Link>
        <Link className="footer__link" to="#">
          Language
        </Link>
        <div className="footer_copyright">
          &#169; 2020 All COPYRIGHTS RESERVED TO INSTAGRAM FROM FACEBOOK
        </div>
      </div>
    </StyledSuggestions>
  );
}

export default Suggestions;
