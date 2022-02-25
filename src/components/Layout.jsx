import React, { useContext, useState } from "react";
import GlobalStyles from "../styles/GlobalStyles";
import Reset from "../styles/Reset";
import ScoreContext from "./ScoreContext";
import Rules from "./Rules";
import {
  HeaderStyle,
  MainLogo,
  RulesStyle,
  ScoreStyle,
} from "../styles/LayoutStyles";

const Layout = ({ children }) => {
  const [scoreNow, setScoreNow] = useContext(ScoreContext);
  const [isRules, setIsRules] = useState(false);

  return (
    <>
      <Reset />
      <GlobalStyles />
      <main className="main-body">
        <HeaderStyle>
          <MainLogo alt="main logo" />
          <ScoreStyle>
            <p>SCORE</p>
            <h3>{scoreNow}</h3>
          </ScoreStyle>
        </HeaderStyle>
        {/* <button onClick={() => setScoreNow(0)}>CLEAR SCORE</button> */}
        {children}
        <RulesStyle onClick={() => setIsRules(true)}>RULES</RulesStyle>
        <Rules isRules={isRules} setIsRules={setIsRules} />
      </main>
    </>
  );
};

export default Layout;
