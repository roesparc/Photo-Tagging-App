import lenny from "../assets/img/characters/lenny.png";
import otto from "../assets/img/characters/otto.png";
import flanders from "../assets/img/characters/flanders.png";
import skinner from "../assets/img/characters/skinner.png";
import ralph from "../assets/img/characters/ralph.png";

import { Link, useLocation } from "react-router-dom";
import styles from "../styles/Header.module.scss";
import { FoundCharacters } from "../types";

interface Props {
  foundCharacters: FoundCharacters;
}

const Header = ({ foundCharacters }: Props) => {
  const location = useLocation();
  const currentPage = location.pathname;

  return (
    <header className={styles.root}>
      <h2>{currentPage === "/" ? "Find The Characters!" : "Leaderboard"}</h2>

      {currentPage === "/" && (
        <div className={styles.characters}>
          <img
            className={foundCharacters.lenny ? styles.found : undefined}
            src={lenny}
            alt="Lenny"
          />
          <img
            className={foundCharacters.flanders ? styles.found : undefined}
            src={flanders}
            alt="Flanders"
          />
          <img
            className={foundCharacters.ralph ? styles.found : undefined}
            src={ralph}
            alt="Ralph"
          />
          <img
            className={foundCharacters.skinner ? styles.found : undefined}
            src={skinner}
            alt="Skinner"
          />
          <img
            className={foundCharacters.otto ? styles.found : undefined}
            src={otto}
            alt="Otto"
          />
        </div>
      )}

      <Link to={currentPage === "/" ? "/leaderboard" : "/"}>
        <button className={styles.headerBtn}>
          {currentPage === "/" ? "Leaderboard" : "Game"}
        </button>
      </Link>
    </header>
  );
};

export default Header;
