import React, { useState } from 'react';
import DropDownComponent from '../DropDownComponent/DropDownComponent';
import InputComponent from '../InputComponent/InputComponent';
import { Button } from "react-bootstrap";
const NameComponent = ({ setInput }) => {
  const [field, setField] = useState(''); // State for selected field
  const [operator, setOperator] = useState(''); // State for selected operator
  const [value, setValue] = useState(''); // State for input value

  const handleFieldChange = (selectedField) => {
    setField(selectedField);
    setInput('field', selectedField); // Notify parent component about field change
  };

  const handleOperatorChange = (selectedOperator) => {
    setOperator(selectedOperator);
    setInput('operator', selectedOperator); // Notify parent component about operator change
  };

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setValue(inputValue);
    setInput('value', inputValue); // Notify parent component about input value change
  };

  const options = ['FirstName', 'LastName', 'Age','Score'];
  const symbolEntitiesOptions = ['>', '<', '>=', '<=', '='];

  return (
    <div className='insideName'>
      <DropDownComponent options={options} onSelect={handleFieldChange} />
      <DropDownComponent options={symbolEntitiesOptions} onSelect={handleOperatorChange} />
      <InputComponent field={field} value={value} onChange={handleInputChange} />
      <Button className="btn">
          Delete
        </Button>
    </div>
  );
};

export default NameComponent;
