import Link from "next/link";
import Links from "./links/Links";
import styles from "./navbar.module.css";

const NavBar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        Logo
      </Link>
      <div className={styles.links}>
        <Links />
      </div>
    </div>
  );
};

export default NavBar;
