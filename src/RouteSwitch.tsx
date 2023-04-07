import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import styles from "./styles/RouteSwitch.module.scss";
import { useState } from "react";
import { FoundCharacters } from "./common/types";
import Main from "./components/Main";
import { INITIAL_FOUND_CHARACTERS } from "./common/initialStates";

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
        <Main></Main>
      </BrowserRouter>
    </div>
  );
};

export default RouteSwitch;
