import { addDoc, collection } from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase/config";
import { FoundCharacters } from "../common/types";
import styles from "../styles/GameOver.module.scss";
import btnStyles from "../styles/ButtonStyles.module.scss";
import LoadingSpinner from "./LoadingSpinner";

interface Props {
  foundCharacters: FoundCharacters;
}

const GameOver = ({ foundCharacters }: Props) => {
  const [showGameOver, setShowGameOver] = useState<boolean>(false);
  const [finalTime, setFinalTime] = useState<number>(0);
  const startTimeRef = useRef<number>(Date.now());
  const nameInputRef = useRef<HTMLInputElement>(null);
  const [showSpinner, setShowSpinner] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (Object.values(foundCharacters).every((value) => value)) {
      setFinalTime(Date.now() - startTimeRef.current);
      setShowGameOver(true);
    }
  }, [foundCharacters]);

  const submitScore = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowSpinner(true);

    await addDoc(collection(db, "leaderboard"), {
      name: nameInputRef.current?.value,
      time: (finalTime / 1000).toFixed(2),
    });

    navigate("/leaderboard");
  };

  return (
    <>
      {showGameOver && (
        <>
          <div className={styles.overlay}></div>

          <div className={styles.root}>
            {showSpinner ? (
              <LoadingSpinner />
            ) : (
              <>
                <p>You finished in {(finalTime / 1000).toFixed(2)} seconds!</p>

                <form className={styles.formScore} onSubmit={submitScore}>
                  <input
                    type="text"
                    placeholder="Enter Name"
                    required
                    ref={nameInputRef}
                  />
                  <button className={btnStyles.main}>Submit Score</button>
                </form>
              </>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default GameOver;
