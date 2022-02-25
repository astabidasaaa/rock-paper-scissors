import React, { useEffect, useState } from "react";

// Create the menu context
const ScoreContext = React.createContext();

export function ScoreProvider({ children }) {
  // Access this state around the app
  const [scoreNow, setScoreNow] = useState(0);

  useEffect(() => {
    setScoreNow(JSON.parse(window.localStorage.getItem("score")));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("score", scoreNow);
  }, [scoreNow]);

  return (
    <ScoreContext.Provider value={[scoreNow, setScoreNow]}>
      {children}
    </ScoreContext.Provider>
  );
}

export default ScoreContext;
