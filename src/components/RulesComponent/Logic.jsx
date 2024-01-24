import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Logic = ({setValues,setScore}) => {
    const handleValues = (e)=>{
        setValues(e.target.value);
    }
    const handleScore=(e)=>{
        setScore(e.target.value)
    }
  return (
    <Row className="inner-value">
      <Col>
        <Form.Label htmlFor="value">Value</Form.Label>
        <Form.Control type="number" id="value" onChange={handleValues}/>
      </Col>
      <Col>
        <Form.Label htmlFor="score">Score</Form.Label>
        <Form.Control type="number" id="score" onChange={handleScore}/>
      </Col>
    </Row>
  );
};

export default Logic;
