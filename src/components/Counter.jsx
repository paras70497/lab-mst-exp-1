import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "3rem" }}>
      <h1>Counter Application</h1>
      <h2>{count}</h2>

      <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
    </div>
  );
};

export default Counter;
