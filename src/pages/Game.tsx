import imagePaths from "../assets/imagePaths";
import { useEffect, useState } from "react";
import gameImg from "../assets/img/main.jpg";
import styles from "../styles/Game.module.scss";
import { CharactersLocation, FoundCharacters } from "../common/types";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import { INITIAL_CHARACTERS_LOCATION } from "../common/initialStates";
import GameOver from "../components/GameOver";

interface Props {
  foundCharacters: FoundCharacters;
  characterFound: (foundCharacter: string) => void;
}

const Game = ({ foundCharacters, characterFound }: Props) => {
  const [characterLoacations, setcharacterLoacations] =
    useState<CharactersLocation>(INITIAL_CHARACTERS_LOCATION);
  const [showCharacterList, setShowCharacterList] = useState<boolean>(false);
  const [showGameFeedback, setShowGameFeedback] = useState<boolean>(false);
  const [gameFeedbackMessage, setGameFeedbackMessage] = useState<string>("");
  const [top, setTop] = useState<number>(0);
  const [left, setLeft] = useState<number>(0);

  useEffect(() => {
    getCharactersLocation();
  }, []);

  const getCharactersLocation = async () => {
    const querySnapshot = await getDocs(collection(db, "locations"));

    querySnapshot.forEach((doc) =>
      setcharacterLoacations((prev) => ({
        ...prev,
        [doc.id]: {
          x1: doc.data().x1,
          x2: doc.data().x2,
          y1: doc.data().y1,
          y2: doc.data().y2,
        },
      }))
    );
  };

  const imageClick = (event: React.MouseEvent<HTMLImageElement>) => {
    const x = event.nativeEvent.offsetX;
    const y = event.nativeEvent.offsetY;

    setShowGameFeedback(false);
    setLeft(x);
    setTop(y);
    setShowCharacterList((prev) => !prev);
  };

  const showGameFeedbackMessage = (message: string) => {
    setGameFeedbackMessage(message);
    setShowGameFeedback(true);
    setTimeout(() => {
      setShowGameFeedback(false);
    }, 2000);
    setShowCharacterList(false);
  };

  const verifyLocation = (character: string, displayName: string) => {
    const characterData = characterLoacations[character];

    if (
      left >= characterData.x1 &&
      left <= characterData.x2 &&
      top >= characterData.y1 &&
      top <= characterData.y2
    ) {
      characterFound(character);
      showGameFeedbackMessage(`You found ${displayName}!`);
    } else {
      showGameFeedbackMessage("Keep looking!");
    }
  };

  return (
    <div className={styles.root}>
      <img
        onClick={imageClick}
        className={styles.gameImg}
        src={gameImg}
        alt="Game"
      />

      {showCharacterList && (
        <div
          style={{ top: `${top}px`, left: `${left + 15}px` }}
          className={styles.characterList}
        >
          {!foundCharacters.burns && (
            <div
              onClick={() => verifyLocation("burns", "Mr. Burns")}
              className={styles.character}
            >
              <img src={imagePaths.burns} alt="Mr. Burns" />
              <p>Mr. Burns</p>
            </div>
          )}

          {!foundCharacters.flanders && (
            <div
              onClick={() => verifyLocation("flanders", "Flanders")}
              className={styles.character}
            >
              <img src={imagePaths.flanders} alt="Flanders" />
              <p>Flanders</p>
            </div>
          )}

          {!foundCharacters.krusty && (
            <div
              onClick={() => verifyLocation("krusty", "Krusty")}
              className={styles.character}
            >
              <img src={imagePaths.krusty} alt="Krusty" />
              <p>Krusty</p>
            </div>
          )}

          {!foundCharacters.apu && (
            <div
              onClick={() => verifyLocation("apu", "Apu")}
              className={styles.character}
            >
              <img src={imagePaths.apu} alt="Apu" />
              <p>Apu</p>
            </div>
          )}

          {!foundCharacters.doctor && (
            <div
              onClick={() => verifyLocation("doctor", "Dr. Hibbert")}
              className={styles.character}
            >
              <img src={imagePaths.doctor} alt="Dr. Hibbert" />
              <p>Dr. Hibbert</p>
            </div>
          )}
        </div>
      )}

      {showGameFeedback && (
        <p
          style={{ top: `${top}px`, left: `${left + 15}px` }}
          className={`${styles.announce} ${
            gameFeedbackMessage === "Keep looking!"
              ? styles.mistake
              : styles.congratulate
          }`}
        >
          {gameFeedbackMessage}
        </p>
      )}

      <GameOver foundCharacters={foundCharacters} />
    </div>
  );
};

export default Game;
