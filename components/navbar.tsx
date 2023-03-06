import Link from "next/link";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <Link href="/#about" className="ml-3 text-xl">
          Ricky Kuo
        </Link>
      </div>
      <ul className={styles.linkContainer}>
        <li className={styles.linkItem}>
          <Link href="/#projects">Past Work</Link>
        </li>
        <li className={styles.linkItem}>
          <Link href="/#skills">Skills</Link>
        </li>
        <li className={styles.linkItem}>
          <Link href="/#education">Educations</Link>
        </li>
        <li className={styles.linkItem}>
          <Link href="/#experience">Experiences</Link>
        </li>
        <li className={styles.linkItem}>
          <Link href="/blog">Blog</Link>
        </li>
      </ul>
    </div>
  );
}
