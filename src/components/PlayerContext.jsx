import React, { useState } from "react";

// Create the menu context
const PlayerContext = React.createContext();

export function PlayerProvider({ children }) {
  // Access this state around the app
  const [player, setPlayer] = useState("");

  return (
    <PlayerContext.Provider value={[player, setPlayer]}>
      {children}
    </PlayerContext.Provider>
  );
}

export default PlayerContext;
