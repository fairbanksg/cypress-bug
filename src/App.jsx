import React, { useState } from "react";
import Text from "./Text";

function App() {
  const [key, setKey] = useState(0);

  return (
    <>
      <input type="text" autoFocus></input>
      <Text renderKey={key} />
      <button onClick={() => setKey((k) => k + 1)}>Increment key</button>
    </>
  );
}

export default App;
