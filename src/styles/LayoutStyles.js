import styled from "styled-components";
import mainLogo from "../images/logo.svg";

export const HeaderStyle = styled.header`
  box-sizing: border-box;
  width: 100%;
  max-width: 720px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border: 1px solid hsl(217, 16%, 45%);
  border-radius: 1rem;

  @media (max-width: 425px) {
    padding: 0.8rem;
    border: none;
    border-radius: 0.8rem;
  }
`;

export const MainLogo = styled(mainLogo)`
  width: 162px;
  height: 99px;

  @media (max-width: 425px) {
    width: 120px;
    height: 64px;
  }
`;

export const ScoreStyle = styled.div`
  box-sizing: border-box;
  height: 99px;
  width: 120px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  color: black;
  background: white;
  border-radius: 0.8rem;
  color: hsl(229, 25%, 31%);

  @media (max-width: 425px) {
    height: 80px;
    width: 100px;
    border-radius: 0.5rem;
  }

  p {
    font: 600 1rem var(--mainFont);
    color: var(--scoreText);
  }

  h3 {
    font: 600 3rem var(--mainFont);
    color: var(--darkText);
    line-height: 3rem;
  }
`;

export const RulesStyle = styled.button`
  color: white;
  border: 1px solid white;
  background: transparent;
  padding: 0.5rem 2.5rem;
  border-radius: 0.5rem;
  font-weight: 700;
  align-self: flex-end;
`;
