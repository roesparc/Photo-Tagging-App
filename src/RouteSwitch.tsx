import { BrowserRouter } from "react-router-dom";
import styles from "./styles/RouteSwitch.module.scss";

const RouteSwitch = () => {
  return (
    <div className={styles.root}>
      <BrowserRouter></BrowserRouter>
    </div>
  );
};

export default RouteSwitch;
