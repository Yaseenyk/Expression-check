import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Dropdown } from "react-bootstrap";

const ExpressionEngine = () => {
  const [rules, setRules] = useState([
    {
      key: "age",
      output: {
        value: 60,
        operator: ">=",
        score: 50,
      },
    },
  ]);

  const [combinator, setCombinator] = useState("and");

  const handleRuleChange = (index, field, value) => {
    const newRules = [...rules];
    newRules[index].output[field] = value;
    setRules(newRules);
  };

  const handleCombinatorChange = (value) => {
    setCombinator(value);
  };

  const addRule = () => {
    setRules([
      ...rules,
      { key: "", output: { value: 0, operator: ">=", score: 0 } },
    ]);
  };

  const deleteRule = (index) => {
    const newRules = [...rules];
    newRules.splice(index, 1);
    setRules(newRules);
  };

  const handleSubmit = () => {
    // Handle the submission of rules and combinator
    const expressionData = {
      rules: rules.map((rule) => ({ ...rule })),
      combinator,
    };
    console.log(expressionData);
  };

  return (
    <Container>
      <Form>
        <Row>
          <Col>
            <Form.Group controlId="combinator">
              <Form.Label>Combinator</Form.Label>
              <Dropdown onSelect={handleCombinatorChange}>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  {combinator}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item eventKey="and">AND</Dropdown.Item>
                  <Dropdown.Item eventKey="or">OR</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Form.Group>
          </Col>
        </Row>
        {rules.map((rule, index) => (
          <Row key={index}>
            <Col>
              <Form.Group controlId={`key-${index}`}>
                <Form.Label>Rule Type</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter rule type"
                  value={rule.key}
                  onChange={(e) =>
                    handleRuleChange(index, "key", e.target.value)
                  }
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId={`rule-type-${index}`}>
                <Form.Label>Rule Type</Form.Label>
                <Form.Control
                  as="select"
                  value={rule.output.operator}
                  onChange={(e) =>
                    handleRuleChange(index, "operator", e.target.value)
                  }
                >
                  <option value="&gt;">&gt;</option>
                  <option value="<">{"<"}</option>
                  <option value="≥">≥</option>
                  <option value="≤">≤</option>
                  <option value="=">=</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId={`value-${index}`}>
                <Form.Label>Value</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter value"
                  value={rule.output.value}
                  onChange={(e) =>
                    handleRuleChange(index, "value", parseFloat(e.target.value))
                  }
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId={`score-${index}`}>
                <Form.Label>Score</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter score"
                  value={rule.output.score}
                  onChange={(e) =>
                    handleRuleChange(index, "score", parseFloat(e.target.value))
                  }
                />
              </Form.Group>
            </Col>
            <Col>
              <Button variant="danger" onClick={() => deleteRule(index)}>
                Delete
              </Button>
            </Col>
          </Row>
        ))}
        <Button variant="primary" onClick={addRule}>
          Add Rule
        </Button>
        <Button variant="success" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default ExpressionEngine;
