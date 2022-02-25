import React, { useContext } from "react";
import PlayerContext from "../components/PlayerContext";
import { Link } from "gatsby";
import { choices } from "../components/Choices";
import {
  ActionIcon,
  BgTriangleStyle,
  PlayerContainer,
} from "../styles/GameStyles";

const IndexPage = () => {
  const [player, setPlayer] = useContext(PlayerContext);

  const handlePlayerClick = (e) => {
    setPlayer(e.target.dataset.id);
  };

  return (
    <PlayerContainer>
      <BgTriangleStyle />
      {choices.map((item) => {
        return (
          <Link
            to="/play"
            key={`player-${item.name}`}
            className={`link-${item.name}`}
          >
            <ActionIcon
              data-id={item.name}
              onClick={handlePlayerClick}
              className={`button-${item.name} scaling`}
            >
              {item.logo}
            </ActionIcon>
          </Link>
        );
      })}
    </PlayerContainer>
  );
};

export default IndexPage;
