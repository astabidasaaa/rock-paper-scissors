import React from "react";
import Layout from "./src/components/Layout";
import { PlayerProvider } from "./src/components/PlayerContext";
import { ScoreProvider } from "./src/components/ScoreContext";

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};

export const wrapRootElement = ({ element }) => {
  return (
    <ScoreProvider>
      <PlayerProvider>{element}</PlayerProvider>
    </ScoreProvider>
  );
};
