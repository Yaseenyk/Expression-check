import React, { useState } from "react";
import "./Expression.scss";
import { Button, Dropdown } from "react-bootstrap";
import NameComponent from "../components/NameComponent/NameComponent";

const Expression = () => {
  const [combinator, setCombinator] = useState('AND');
  const [groupOrField, setGroupOrField] = useState('Group');
  const [inputValue, setInputValue] = useState('');
  const [rules, setRules] = useState({
    combinator: combinator,
    rules: [],
    not: false
  });

  const handleAddRule = () => {
    const scoringValue = groupOrField === 'Group' ? 'Group' : 'Field';
    const valuePrefix = groupOrField === 'Group' ? '+' : '-';
    const notValue = groupOrField === 'Group' ? false : true;

    setRules(prevRules => ({
      ...prevRules,
      not: notValue,
      rules: [...prevRules.rules, { field: 'First Name', operator: '', value: valuePrefix + inputValue, scoring_value: scoringValue }]
    }));
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleRuleChange = (index, field, value) => {
    setRules(prevRules => ({
      ...prevRules,
      rules: prevRules.rules.map((rule, i) => 
        i === index ? { ...rule, [field]: value } : rule
      )
    }));
  };

  const handleCombinatorChange = (selectedCombinator) => {
    const notValue = selectedCombinator === 'Group' ? false : true;

    setCombinator(selectedCombinator);
    setRules(prevRules => ({
      ...prevRules,
      not: notValue,
      combinator: selectedCombinator
    }));
  };

  const handleGroupOrFieldToggle = () => {
    setGroupOrField(groupOrField === 'Group' ? 'Field' : 'Group');
  };

  const combinators = ["AND", "OR"];

  const handleSubmit = () => {
    const formattedRules = rules.rules.map(rule => ({
      ...rule,
      value: (rule.scoring_value === 'Group' ? '+' : '-') + rule.value
    }));

    console.log({
      ...rules,
      rules: formattedRules
    });
  };

  return (
    <div className="mainComponent">
      <div className="Heading">Expression Check</div>
      <div className="GroupsDisplay">
        <Dropdown onSelect={handleCombinatorChange}>
          <Dropdown.Toggle variant="primary" id="dropdown-basic">
            {combinator}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {combinators.map((option, index) => (
              <Dropdown.Item key={index} eventKey={option}>{option}</Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
        <Button className="btn" onClick={handleAddRule}>
          Rule
        </Button>
        <Button className="btn" onClick={handleGroupOrFieldToggle}>
          {groupOrField === 'Group' ? 'Field' : 'Group'}
        </Button>
        <Button className="btn" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
      <div className="NameComponent">
        {rules.rules.map((rule, index) => (
          <NameComponent
            key={index}
            field={rule.field}
            operator={rule.operator}
            value={rule.value}
            setInput={(field, value) => handleRuleChange(index, field, value)}
          />
        ))}
      </div>
    </div>
  );
};

export default Expression;
