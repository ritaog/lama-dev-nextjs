"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navLink.module.css";

const NavLink = ({ item }) => {
  const pathname = usePathname();
  const { title, path } = item;
  return (
    <Link
      className={`${styles.container} ${
        pathname === path && styles.activeLink
      }`}
      href={path}
    >
      {title}
    </Link>
  );
};

export default NavLink;
