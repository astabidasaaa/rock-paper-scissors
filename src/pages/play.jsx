import { Link } from "gatsby";
import React, { useContext, useEffect, useState } from "react";
import { choices } from "../components/Choices";
import CountDown from "../components/CountDown";
import PlayerContext from "../components/PlayerContext";
import ScoreContext from "../components/ScoreContext";
import {
  ActionContainer,
  ActionIcon,
  GameContainer,
  PlayAgainContainer,
} from "../styles/GameStyles";

const Play = () => {
  const [scoreNow, setScoreNow] = useContext(ScoreContext);
  const [player, setPlayer] = useContext(PlayerContext);
  const [computer, setComputer] = useState("");
  const [isPlayerWin, setIsPlayerWin] = useState("");

  useEffect(() => {
    const computerDelay = window.setTimeout(() => {
      computerPick();
    }, 3000);

    return () => window.clearTimeout(computerDelay);
  }, []);

  useEffect(() => {
    const resultDelay = window.setTimeout(() => {
      result();
    }, 1000);

    return () => window.clearTimeout(resultDelay);
  }, [computer]);

  const computerPick = () => {
    setComputer(choices[Math.floor(Math.random() * choices.length)].name);
  };

  const result = () => {
    if (player === "rock") {
      switch (computer) {
        case "paper":
          setIsPlayerWin("You Lose");
          setScoreNow(scoreNow - 1);
          break;
        case "scissors":
          setIsPlayerWin("You Win");
          setScoreNow(scoreNow + 1);
          break;
        case "rock":
          setIsPlayerWin("Draw");
          break;
        default:
          setIsPlayerWin("");
          break;
      }
    } else if (player === "paper") {
      switch (computer) {
        case "scissors":
          setIsPlayerWin("You Lose");
          setScoreNow(scoreNow - 1);
          break;
        case "rock":
          setIsPlayerWin("You Win");
          setScoreNow(scoreNow + 1);
          break;
        case "paper":
          setIsPlayerWin("Draw");
          break;
        default:
          setIsPlayerWin("");
          break;
      }
    } else if (player === "scissors") {
      switch (computer) {
        case "rock":
          setIsPlayerWin("You Lose");
          setScoreNow(scoreNow - 1);
          break;
        case "paper":
          setIsPlayerWin("You Win");
          setScoreNow(scoreNow + 1);
          break;
        case "scissors":
          setIsPlayerWin("Draw");
          break;
        default:
          setIsPlayerWin("");
          break;
      }
    }
  };

  // useEffect(() => {
  //   console.group("session");
  //   console.log("player: " + player);
  //   console.log("computer: " + computer);
  //   console.log("is Win: " + isPlayerWin);
  //   console.groupEnd("session");
  // console.log(choices.filter((item) => item.name === player));
  // setScoreNow(Math.floor(Math.random() * 10));
  // setScoreNow(scoreNow + 1);

  // return setComputer(undefined);
  // }, [player, computer, isPlayerWin]);

  return (
    <GameContainer>
      <ActionContainer>
        <h2>YOU PICKED</h2>
        {player &&
          choices
            .filter((item) => item.name === player)
            .map((item) => {
              return (
                <ActionIcon
                  data-id={item.name}
                  className={`button-${item.name} game-started`}
                  key={`player-${item.name}`}
                >
                  {item.logo}
                </ActionIcon>
              );
            })}
      </ActionContainer>
      {isPlayerWin && (
        <PlayAgainContainer>
          <h1>{isPlayerWin}</h1>
          <Link to="/">
            <button>Play Again</button>
          </Link>
        </PlayAgainContainer>
      )}
      <ActionContainer>
        <h2>THE HOUSE PICKED</h2>
        {computer ? (
          choices
            .filter((item) => item.name === computer)
            .map((item) => {
              return (
                <ActionIcon
                  data-id={item.name}
                  className={`button-${item.name} game-started`}
                  key={`computer-${item.name}`}
                >
                  {item.logo}
                </ActionIcon>
              );
            })
        ) : (
          <CountDown />
        )}
      </ActionContainer>
    </GameContainer>
  );
};

export default Play;
