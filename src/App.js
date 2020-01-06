import React from "react";
import "./App.css";

import Counter from "./Counter.component.jsx";
import CounterHooks from "./CounterHooks.component.jsx";
import Toggler from "./Toggler.component.jsx";
import InputField from "./InputField.component";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <InputField />
        <InputField initialValue={"hello"} />
        <Counter />
        <CounterHooks />
        <Toggler />
      </header>
    </div>
  );
}

export default App;
