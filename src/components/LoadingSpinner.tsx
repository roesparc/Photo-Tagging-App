import { ImSpinner } from "react-icons/im";
import styles from "../styles/LoadingSpinner.module.scss";

const LoadingSpinner = () => {
  return <ImSpinner className={styles.root} />;
};

export default LoadingSpinner;
