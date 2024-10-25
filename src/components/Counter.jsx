import React, { useState, useEffect } from "react";

const Counter = ({ setCount }) => {
  const [localCount, setLocalCount] = useState(0);

  const decrement = () => setLocalCount((prevCount) => prevCount - 1);
  const increment = () => setLocalCount((prevCount) => prevCount + 1);

  useEffect(() => {
    setCount(localCount);
  }, [localCount, setCount]);

  return (
    <div className="counter-container">
      <p className="counter-value">{localCount}</p>
      <button className="counter-button" onClick={decrement}>
        -
      </button>
      <button className="counter-button" onClick={increment}>
        +
      </button>
    </div>
  );
};

export default Counter;
