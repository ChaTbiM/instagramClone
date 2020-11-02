import React from "react";
import { Link } from "react-router-dom";
import Suggestion from "../Suggestion/Suggestion";
import { StyledSuggestions } from "./StyledSuggestions";

function Suggestions() {
  const temp = Array.from(Array(5).keys());

  const renderSuggstionsList = () => temp.map((el,index) => <Suggestion key={`suggestion-${index}`} />);

  return (
    <StyledSuggestions>
      <div className="header">
        <p>Suggestions For You</p>
        <Link to="/people">
          <p>See ALL</p>
        </Link>
      </div>
      {renderSuggstionsList()}
    </StyledSuggestions>
  );
}

export default Suggestions;
