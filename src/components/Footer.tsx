import { FaGithub } from "react-icons/fa";
import styles from "../styles/Footer.module.scss";

const Footer = () => (
  <footer className={styles.root}>
    <p>
      By{" "}
      <a
        className={styles.authorLink}
        aria-label="Author's GitHub Page"
        href="https://github.com/roesparc/"
      >
        roesparc
      </a>
    </p>

    <a aria-label="Author's GitHub Page" href="https://github.com/roesparc/">
      <FaGithub className={styles.githubLogo} />
    </a>
  </footer>
);

export default Footer;
