import React from "react";
import { Form } from "react-bootstrap";

const InputComponent = ({ field, value = '', onChange }) => {
  let type = 'text';
  let placeholder = 'Enter your value';

  if (field === 'Age') {
    type = 'number';
    placeholder = 'Enter your age';
  } else if (field === 'FirstName') {
    placeholder = 'Enter your first name';
  } else if (field === 'LastName') {
    placeholder = 'Enter your last name';
  }else if( field==='Score'){
    placeholder='Enter Your Score';
    type='number';
  }

  return (
    <Form.Group>
      <Form.Control 
        type={type} 
        placeholder={placeholder} 
        value={value} 
        onChange={onChange}
      />
    </Form.Group>
  );
};

export default InputComponent;
