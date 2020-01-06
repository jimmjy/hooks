import React, { useState } from "react";

function CounterHooks() {
  const [count, updateCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => updateCount(count + 1)}>INCREMENT</button>
      <button onClick={() => updateCount(0)}>RESET</button>
    </div>
  );
}

export default CounterHooks;
