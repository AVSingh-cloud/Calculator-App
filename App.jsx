import "./App.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import { useState } from "react";

const App = () => {
  let [numText, setNumText] = useState("");

  const handleButtonNum = (buttontext) => {
    let newNumText = numText + buttontext;

    if (buttontext == "C") {
      setNumText("");
    } else if (buttontext == "=") {
      setNumText(eval(numText));
    } else {
      setNumText(newNumText);
    }
  };

  return (
    <div className="container">
      <h2 className="heading">Calculator</h2>
      <Display displayValue={numText} />
      <ButtonsContainer handleButtonNum={handleButtonNum} />
    </div>
  );
};

export default App;
