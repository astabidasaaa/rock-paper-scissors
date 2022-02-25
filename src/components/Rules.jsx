import React, { useEffect } from "react";
import styled from "styled-components";
import RulesImage from "../images/image-rules.svg";
import CloseBtn from "../images/icon-close.svg";

const RulesContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: none;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: hsla(0, 0%, 0%, 0.4);
  // filter: blur(4px);
  backdrop-filter: blur(4px);

  ${({ active }) =>
    active &&
    `
display: flex;
`}
`;

const RulesBox = styled.div`
  box-sizing: border-box;
  background: white;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  padding: 3rem;
  border-radius: 1rem;

  h1 {
    font: 700 2rem var(--mainFont);
    color: var(--darkText);
  }

  button {
    border: none;
    background: none;

    &:hover {
      svg {
        path {
          opacity: 1;
        }
      }
    }
  }

  @media (max-width: 425px) {
    width: 100%;
    height: 100%;
    border-radius: 0;
    align-items: center;
    gap: 5rem;
  }
`;

const Rules = ({ isRules, setIsRules }) => {
  useEffect(() => {
    console.log("isRules: " + isRules);
  }, [isRules]);

  return (
    <RulesContainer active={isRules}>
      <RulesBox>
        <h1>RULES</h1>
        <RulesImage />
        <button onClick={() => setIsRules(false)}>
          <CloseBtn />
        </button>
      </RulesBox>
    </RulesContainer>
  );
};

export default Rules;
