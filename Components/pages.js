import Link from "next/link";
import styles from "../styles/pages.module.css";

const Pages = () => {
  return (
    <div className={styles.container}>
      <div>
        <Link href="/">Dashboard</Link>
      </div>
      <div>
        <Link href="/application">Application</Link>
      </div>
      <div>
        <Link href="/">Portal</Link>
      </div>
    </div>
  );
};

export default Pages;
