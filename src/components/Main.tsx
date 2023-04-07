import { ReactNode } from "react";
import styles from "../styles/Main.module.scss";

interface Props {
  children: ReactNode;
}

const Main = ({ children }: Props) => (
  <main className={styles.root}>{children}</main>
);

export default Main;
