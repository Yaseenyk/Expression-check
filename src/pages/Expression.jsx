import React, { useState, useCallback } from "react";
import Selector from "../components/FormComponents/Selector";
import Button from "react-bootstrap/Button";
import Combinator from "../components/RulesComponent/Combinator";
import Logic from "../components/RulesComponent/Logic";
import ButtonComponent from "../components/Buttons/ButtonComponent";
import "./Expression.scss";
import DisplayComponent from "../components/DisplayComponent/DisplayComponent";
import DisplayObjects from "../DisplayObejcts/DisplayObjects";
import Navbar from '../Navbar/Navbar'
const Expression = () => {
  const [combinator, setCombinator] = useState("AND");
  const [selectRules, setSelectRules] = useState("");
  const [symbols, setSymbols] = useState("");
  const [values, setValues] = useState("");
  const [score, setScore] = useState("");
  const [andRules, setAndRules] = useState([]);
  const [orRules, setOrRules] = useState([]);
  const [togglePopupBtn, setTogglePopupBtn] = useState(false);

  const handleAddRule = useCallback(() => {
    if (selectRules && values && symbols && score !== undefined && combinator) {
      const newRule = {
        key: selectRules,
        output: {
          value: values,
          operator: symbols,
          score: score,
        },
      };

      if (combinator === "AND") {
        setAndRules((prevRules) => [...prevRules, newRule]);
      } else if (combinator === "OR") {
        setOrRules((prevRules) => [...prevRules, newRule]);
      }
    } else {
      console.error("Invalid values, cannot add a new rule.");
    }
  }, [selectRules, values, symbols, score, combinator]);

  const onDeleteRule = (index) => {
    if (combinator === "AND") {
      setAndRules((prevRules) => prevRules.filter((_, i) => i !== index));
    } else if (combinator === "OR") {
      setOrRules((prevRules) => prevRules.filter((_, i) => i !== index));
    }
  };
  const handleApiCallDemo=()=>{
    setAndRules([]);
    setOrRules([]);
    setTogglePopupBtn(false)
  }
  return (
    <div className="mainComponent">
        <div>
        <Navbar/>
        </div>
      <div className="mainComponent-inner">
      (Select Combinator Here)
        <div className="mainComponent-logic">
            
          <Combinator setCombinator={setCombinator} />
        </div>
        <div className="mainComponent-rules">
          
          <div className="mainComponent-Selector">
            
            <Selector setSymbols={setSymbols} setSelectRules={setSelectRules} />
          </div>
          <Logic setValues={setValues} setScore={setScore} />
          <div className="mainComponent-Btn">
            <Button variant="primary" onClick={handleAddRule}>
              Add Rule
            </Button>
          </div>
        </div>
        <div className="text">

        (Display of rules you can select AND/OR Display's accordingly,"X" button will delete the data)
        </div>
        <h3>Rules</h3>
        <div className="DisplayComponent">
          {(combinator === "AND" && andRules.length > 0) ||
          (combinator === "OR" && orRules.length > 0) ? (
            <DisplayComponent
              rules={{
                rules: combinator === "AND" ? andRules : orRules,
                combinator,
              }}
              onDeleteRule={onDeleteRule}
            />
          ) : (
            "No Rules Set..."
          )}
        </div>
      </div>
      <div className="text">
      (Submit Button will Replicate the apu call it will show both And/OR Rules.)
      </div>
      <ButtonComponent setTogglePopupBtn={setTogglePopupBtn}/>
      {togglePopupBtn && (
        <div className="display-obejct">
          <DisplayObjects orRules={orRules} andRules={andRules} handleApiCallDemo={handleApiCallDemo}/>
        </div>
      )}
    </div>
  );
};

export default Expression;
