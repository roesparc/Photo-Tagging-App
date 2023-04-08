import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/config";
import styles from "../styles/Leaderboard.module.scss";
import { INITIAL_LEADERBOARD_DATA } from "../common/initialStates";
import { LeaderboardData } from "../common/types";
import LoadingSpinner from "../components/LoadingSpinner";

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState<Array<LeaderboardData>>([
    INITIAL_LEADERBOARD_DATA,
  ]);
  const [showSpinner, setShowSpinner] = useState<boolean>(true);

  useEffect(() => {
    getLeaderboard();
  }, []);

  const getLeaderboard = async () => {
    const q = query(collection(db, "leaderboard"), orderBy("time", "asc"));
    const querySnapshot = await getDocs(q);

    const entries = querySnapshot.docs.map((doc) => ({
      ...(doc.data() as LeaderboardData),
      id: doc.id,
    }));

    setLeaderboard(entries);
    setShowSpinner(false);
  };

  return (
    <div className={styles.root}>
      {showSpinner ? (
        <LoadingSpinner />
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th colSpan={1}></th>
              <th>Name</th>
              <th>Time (Seconds)</th>
            </tr>
          </thead>

          <tbody>
            {leaderboard.map((entry, index) => (
              <tr key={entry.id}>
                <td>{index + 1}</td>
                <td>{entry.name}</td>
                <td>{entry.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Leaderboard;
