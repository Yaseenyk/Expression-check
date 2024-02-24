import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

const DropDownComponent = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(options[0]); // Default to the first option

  const handleSelect = (option) => {
    setSelectedOption(option);
    onSelect(option); // Call the onSelect callback with the selected option
  };

  return (
    <Dropdown>
      <Dropdown.Toggle id="dropdown-basic">
        {selectedOption}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {options.map((option, index) => (
          <Dropdown.Item key={index} onClick={() => handleSelect(option)}>
            {option}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropDownComponent;
