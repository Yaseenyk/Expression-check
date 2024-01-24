import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const DropDown = ({ label, options, onChange }) => (
  <Col>
    <Form.Label>{label}</Form.Label>
    <Form.Select aria-label={`Select The ${label}`} onChange={onChange} style={{ cursor: "pointer" }}>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </Form.Select>
  </Col>
);

const Selector = ({ setSymbols, setSelectRules }) => {
  const selectRuleOptions = [
    { label: "Age", value: "Age" },
    { label: "Credit Score", value: "Credit Score" },
    { label: "Account Balance", value: "Account Balance" },
  ];

  const symbolEntitiesOptions = [
    { value: ">", label: ">" },
    { value: "<", label: "<" },
    { value: ">=", label: ">=" },
    { value: "<=", label: "<=" },
    { value: "=", label: "=" },
  ];

  const handleRuleChange = (e) => {
    setSelectRules(e.target.value);
  };

  const handleSymbolChange = (e) => {
    setSymbols(e.target.value);
  };

  return (
    <Row>
      <DropDown label="Rule" options={selectRuleOptions} onChange={handleRuleChange} />
      <DropDown label="Symbol" options={symbolEntitiesOptions} onChange={handleSymbolChange} />
    </Row>
  );
};

export default Selector;
