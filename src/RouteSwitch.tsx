import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import styles from "./styles/RouteSwitch.module.scss";
import { useState } from "react";
import { FoundCharacters } from "./types";

const INITIAL_FOUND_CHARACTERS = {
  lenny: false,
  flanders: false,
  ralph: false,
  skinner: false,
  otto: false,
};

const RouteSwitch = () => {
  const [foundCharacters, setFoundCharacters] = useState<FoundCharacters>(
    INITIAL_FOUND_CHARACTERS
  );

  const handleFoundCharacters = (foundCharacter: string) => {
    setFoundCharacters((prev) => ({ ...prev, [foundCharacter]: true }));
  };

  return (
    <div className={styles.root}>
      <BrowserRouter>
        <Header foundCharacters={foundCharacters} />
      </BrowserRouter>
    </div>
  );
};

export default RouteSwitch;
