import styled from "styled-components";
import BgTriangle from "../images/bg-triangle.svg";

export const PlayerContainer = styled.div`
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  .link-rock {
    transform: translateY(4rem);

    @media (max-width: 768px) {
      transform: scale(0.7) translateY(4rem);
    }
  }

  .link-paper {
    transform: translate(2rem, -8rem);

    @media (max-width: 768px) {
      transform: scale(0.7) translate(7rem, -8rem);
    }
  }

  .link-scissors {
    transform: translate(-2rem, -8rem);

    @media (max-width: 768px) {
      transform: scale(0.7) translate(-7rem, -8rem);
    }
  }
`;

export const ActionIcon = styled.div`
  box-sizing: border-box;
  width: 160px;
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  border-radius: 9999px;

  &.button-rock {
    border: 18px solid hsl(349, 70%, 56%);
    box-shadow: inset 0 5px 6px grey, 0 8px hsl(349, 74%, 50%);
  }

  &.button-paper {
    border: 18px solid hsl(230, 89%, 65%);
    box-shadow: inset 0 5px 6px grey, 0 8px hsl(230, 93%, 58%);
  }

  &.button-scissors {
    border: 18px solid hsl(40, 84%, 53%);
    box-shadow: inset 0 5px 6px grey, 0 8px hsl(39, 99%, 40%);
  }

  &.scaling:hover {
    transform: scale(1.2);
  }

  svg {
    user-select: none;
    pointer-events: none;
  }

  &.game-started {
    width: 250px;
    height: 250px;
    border-width: 25px;

    svg {
      transform: scale(1.6);
    }

    @media (max-width: 768px) {
      width: 112px;
      height: 112px;
      border-width: 12px;

      svg {
        transform: scale(0.7);
      }
    }
  }
`;

export const GameContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  gap: 4rem;

  @media (max-width: 768px) {
    gap: 4rem 2rem;
    flex-flow: row wrap;
  }
`;

export const ActionContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  order: 1;

  h2 {
    font: 600 1.2rem var(--mainFont);
    color: white;
    letter-spacing: 1px;
    order: 1;
  }

  div {
    order: 2;
  }

  @media (max-width: 768px) {
    gap: 2rem;

    h2 {
      font-size: 1rem;
      order: 2;
    }

    div {
      order: 1;
    }
  }
`;

export const PlayAgainContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  order: 1;

  @media (max-width: 768px) {
    order: 3;
  }

  h1 {
    font: 700 3rem var(--mainFont);
    text-transform: uppercase;
    color: white;
    text-align: center;
  }

  a {
    button {
      padding: 0.8rem 3rem;
      font: 700 1rem var(--mainFont);
      letter-spacing: 1px;
      text-transform: uppercase;
      color: var(--darkText);
      border: none;
      outline: none;
      border-radius: 0.5rem;

      &:hover {
        color: hsl(349, 71%, 52%);
      }
    }
  }
`;

export const CountdownContainer = styled.div`
  width: 250px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: hsla(0, 0%, 0%, 0.3);
  border-radius: 9999px;
  gap: 1rem;

  h1 {
    font: 700 5rem var(--mainFont);
    color: white;
  }

  @media (max-width: 768px) {
    width: 112px;
    height: 112px;

    h1 {
      font-size: 3rem;
    }
  }
`;

export const BgTriangleStyle = styled(BgTriangle)`
  position: absolute;
  z-index: -99;

  @media (max-width: 768px) {
    transform: scale(0.7);
  }
`;
