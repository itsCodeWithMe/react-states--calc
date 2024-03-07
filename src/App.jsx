import Display from "../src/Components/Display";
import ButtonsContainer from "../src/Components/ButtonsContainer";
import styles from "./App.module.css";
import { useState } from "react";

function App() {

  const [calVal, setCalVal] = useState("");



  const buttonFunction = (event, buttonName) => {
    // console.log(event);
    if (buttonName === "C") {
      let displayVal = "";
      setCalVal(displayVal);
    }
    else if (buttonName === "=") {
      if (calVal === "") {
        setCalVal("0");
      }
      else {
        const result = eval(calVal);
        setCalVal(result);
        // const parsed = JSON.parse(result);
        // console.log(parsed);
        // console.log(typeof (parsed));
      }
    }
    else {
      let newDisplayValue = calVal + buttonName;
      setCalVal(newDisplayValue);
    }
  }

  return (
    <div className={styles.calculator}>
      <Display displayVal={calVal}></Display>
      <ButtonsContainer handleOnClick={buttonFunction}></ButtonsContainer>
    </div>
  );
}

export default App;
