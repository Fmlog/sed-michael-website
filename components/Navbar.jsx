import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="navbar">
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/img/sedmichael-wt-logo.svg"
            width="150px"
            height="40px"
            alt="sed-michael-logo"
          />
        </Link>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <Link href="/about">about us</Link>
          </li>
          <li className={styles.listItem}>
            <Link href="/work">Our work</Link>
          </li>
          <li className={styles.listItem}>
            <Link href="/services">Our expertise</Link>
          </li>
          <li className={styles.listItem}>
            <Link href="/careers">Our careers</Link>
          </li>
        </ul>
        <div className={styles.hamburger} onClick={() => setOpen(!open)}>
          <div className={styles.line} />
          <div className={styles.line} />
          <div className={styles.line} />
        </div>
        <ul
          onClick={() => setOpen(false)}
          className={styles.menu}
          style={{ right: open ? "0px" : "-100vw" }}
        >
          <li className={styles.menuItem}>
            <Link href="/people">Our people</Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="/work">Our work</Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="/services">Our expertise</Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="/careers">Our careers</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
