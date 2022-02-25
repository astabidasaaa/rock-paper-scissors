import React, { useEffect, useState } from "react";
import { CountdownContainer } from "../styles/GameStyles";

const CountDown = () => {
  const [count, setCount] = useState(3);

  useEffect(() => {
    if (count > 0) {
      const countdownFunc = window.setTimeout(() => {
        setCount(count - 1);
      }, 1000);

      return () => window.clearTimeout(countdownFunc);
    }
  }, [count]);

  return (
    <CountdownContainer>
      <h1>{count}</h1>
    </CountdownContainer>
  );
};

export default CountDown;
