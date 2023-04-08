import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/config";
import styles from "../styles/Leaderboard.module.scss";

interface LeaderboardData {
  name: string;
  time: number;
  id: string;
}

const INITIAL_LEADERBOARD_DATA = {
  name: "Name",
  time: 0,
  id: "id",
};

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState<Array<LeaderboardData>>([
    INITIAL_LEADERBOARD_DATA,
  ]);

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
  };

  return (
    <div className={styles.root}>
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
    </div>
  );
};

export default Leaderboard;
