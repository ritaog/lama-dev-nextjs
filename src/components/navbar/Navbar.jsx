import Links from "./links/Links";
import styles from "./navbar.module.css";

const NavBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Logo</div>
      <div className={styles.links}>
        <Links />
      </div>
    </div>
  );
};

export default NavBar;
