import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import styles from "./styles/App.module.scss";
import { useState } from "react";
import { FoundCharacters } from "./common/types";
import { INITIAL_FOUND_CHARACTERS } from "./common/initialStates";
import Game from "./pages/Game";
import Leaderboard from "./pages/Leaderboard";
import Footer from "./components/Footer";

const App = () => {
  const [foundCharacters, setFoundCharacters] = useState<FoundCharacters>(
    INITIAL_FOUND_CHARACTERS
  );

  const handleFoundCharacters = (foundCharacter: string) => {
    setFoundCharacters((prev) => ({ ...prev, [foundCharacter]: true }));
  };

  const resetFoundCharacters = () => {
    setFoundCharacters(INITIAL_FOUND_CHARACTERS);
  };

  return (
    <div className={styles.root}>
      <BrowserRouter>
        <Header
          foundCharacters={foundCharacters}
          resetFoundCharacters={resetFoundCharacters}
        />

        <main>
          <Routes>
            <Route
              path="/"
              element={
                <Game
                  foundCharacters={foundCharacters}
                  characterFound={handleFoundCharacters}
                />
              }
            />

            <Route path="/leaderboard" element={<Leaderboard />} />
          </Routes>
        </main>
      </BrowserRouter>

      <Footer />
    </div>
  );
};

export default App;
