import React from 'react';
import Button from "react-bootstrap/Button";

const DisplayComponent = ({ rules, onDeleteRule }) => {
  const handleDeleteClick = (index) => {
    if (onDeleteRule) {
      onDeleteRule(index);
    }
  };

  return (
    <div className="container">
      {rules.combinator !== "" ? (
        <div>
          Combinator :&nbsp;
          {rules.combinator}
        </div>
      ) : (
        "No Rules Set..."
      )}
      {rules.rules.map((rule, index) => (
        <div className="inner-container" key={index}>
          {(rule.combinator === rules.combinator || !rule.combinator) && ( // Check if rule's combinator matches the current combinator or is not present
            <>
              <div>
                Rule :&nbsp;
                {rule.key}
              </div>
              {rule.output && (
                <>
                  <div>
                    Value :&nbsp;
                    {rule.output.value}
                  </div>
                  <div>
                    Symbol :&nbsp;
                    {rule.output.operator}
                  </div>
                  <div>
                    Score :&nbsp;
                    {rule.output.score}
                  </div>
                </>
              )}
              <Button variant="danger" size="sm" onClick={() => handleDeleteClick(index)}>
                X
              </Button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default DisplayComponent;
