import { useState } from "react";

function Counter() {
  const [count, setCount] = useState<number>(0);
  const [amount, setAmount] = useState<number>(0);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <input
        type="number"
        value={amount}
        onChange={(event) => setAmount(parseInt(event.target.value))}
      />
      <button onClick={() => setCount(amount)}>Set</button>
    </div>
  );
}

export default Counter;
