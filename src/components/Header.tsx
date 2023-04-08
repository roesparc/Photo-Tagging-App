import { Link, useLocation } from "react-router-dom";
import styles from "../styles/Header.module.scss";
import { FoundCharacters } from "../common/types";
import imagePaths from "../assets/imagePaths";

interface Props {
  foundCharacters: FoundCharacters;
  resetFoundCharacters: () => void;
}

const Header = ({ foundCharacters, resetFoundCharacters }: Props) => {
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
              src={imagePaths.burns}
              alt="Mr. Burns"
            />
            <img
              className={foundCharacters.flanders ? styles.found : undefined}
              src={imagePaths.flanders}
              alt="Flanders"
            />
            <img
              className={foundCharacters.krusty ? styles.found : undefined}
              src={imagePaths.krusty}
              alt="Krusty"
            />
            <img
              className={foundCharacters.apu ? styles.found : undefined}
              src={imagePaths.apu}
              alt="Apu"
            />
            <img
              className={foundCharacters.doctor ? styles.found : undefined}
              src={imagePaths.doctor}
              alt="Dr. Hibbert"
            />
          </div>
        )}

        <Link to={currentPage === "/" ? "/leaderboard" : "/"}>
          <button className={styles.headerBtn} onClick={resetFoundCharacters}>
            {currentPage === "/" ? "Leaderboard" : "Game"}
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
