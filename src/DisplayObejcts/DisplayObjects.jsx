import Button from "react-bootstrap/Button";
import { useState } from 'react';

const DisplayObjects = ({ andRules, orRules, handleApiCallDemo }) => {
    console.log(orRules)
  const [isPopupVisibleAnd, setPopupVisibleAnd] = useState(false);
  const [isPopupVisibleOr, setPopupVisibleOr] = useState(false);

  const togglePopupOr = () => {
    setPopupVisibleOr(!isPopupVisibleOr);
  };
  const togglePopupAnd = () => {
    setPopupVisibleAnd(!isPopupVisibleAnd);
  };

  const andRulesJSON = JSON.stringify(
    { rules: andRules, combinator: "AND" },
    null,
    2
  );
  const orRulesJSON = JSON.stringify(
    { rules: orRules, combinator: "OR" },
    null,
    2
  );

  return (
    <div className="popup">
      <div className="Inner-popup">
        <div>
          <h4>AND Rules:</h4>
          <Button variant="info" onClick={togglePopupAnd}>
            {isPopupVisibleAnd ? "Hide JSON" : "Show JSON"}
          </Button>
          {isPopupVisibleAnd && <pre>{andRulesJSON}</pre>}
        </div>
        <div>
          <h4>OR Rules:</h4>
          <Button variant="info" onClick={togglePopupOr}>
            {isPopupVisibleOr ? "Hide JSON" : "Show JSON"}
          </Button>
          {isPopupVisibleOr && <pre>{orRulesJSON}</pre>}
        </div>
      </div>
      <Button variant="secondary" onClick={handleApiCallDemo}>Close</Button>
    </div>
  );
};

export default DisplayObjects;
