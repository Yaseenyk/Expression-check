import Form from "react-bootstrap/Form";

const Combinator = ({ setCombinator }) => {
  const handleCombinator = (e) => {
    setCombinator(e.target.value);
  };
  return (
    <>
      <Form.Label>Combinator</Form.Label>
      <Form.Select
        style={{ cursor: "pointer" }}
        onChange={handleCombinator}
        defaultValue="AND"
      >
        <option value="AND">AND</option>
        <option value="OR">OR</option>
      </Form.Select>
    </>
  );
};

export default Combinator;
