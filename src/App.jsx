import { useState } from "react";

import Home from "./pages/Home/Home";
import InputNfe from "./components/InputNfe/InputNfe";
import ResultDisabled from "./components/ResultDisabled/ResultDisabled";

function App() {
  const [chave, setChave] = useState("");
  const [resultDisabled, setResultDisabled] = useState(true);

  return (
    <>
      <div className="container">
        <Home />


        <InputNfe 
        chave={chave} 
        setChave={setChave}
        resultDisabled={setResultDisabled}        
        ></InputNfe>
        {resultDisabled && <ResultDisabled />} 
        
      </div>
    </>
  );
}

export default App;
