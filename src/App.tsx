import React from "react";

import HelloWorld from "./components/HelloWorld";
import Button from "./components/Button/index";

function App() {
  return (
    <div>
      <HelloWorld />
      <Button buttonTitle="버튼" handleClick={() => console.log(1)} />
    </div>
  );
};

export default App;
