import krusty from "../assets/img/characters/krusty.png";
import burns from "../assets/img/characters/burns.png";
import flanders from "../assets/img/characters/flanders.png";
import apu from "../assets/img/characters/apu.png";
import doctor from "../assets/img/characters/doctor.png";

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
      <div className={styles.heading}>
        <h1>Simpsons Photo Tagging</h1>
        <p>Find the characters!</p>
      </div>

      <div className={styles.gameStats}>
        {currentPage === "/leaderboard" && <h2>Leaderboard</h2>}

        {currentPage === "/" && (
          <div className={styles.characters}>
            <img
              className={foundCharacters.burns ? styles.found : undefined}
              src={burns}
              alt="Mr. Burns"
            />
            <img
              className={foundCharacters.flanders ? styles.found : undefined}
              src={flanders}
              alt="Flanders"
            />
            <img
              className={foundCharacters.krusty ? styles.found : undefined}
              src={krusty}
              alt="Krusty"
            />
            <img
              className={foundCharacters.apu ? styles.found : undefined}
              src={apu}
              alt="Apu"
            />
            <img
              className={foundCharacters.doctor ? styles.found : undefined}
              src={doctor}
              alt="Dr. Hibbert"
            />
          </div>
        )}

        <Link to={currentPage === "/" ? "/leaderboard" : "/"}>
          <button className={styles.headerBtn}>
            {currentPage === "/" ? "Leaderboard" : "Game"}
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
