import Link from "next/link";
import styles from "../styles/appsections.module.css";

const Appsections = () => {
  return (
    <div className={styles.container}>
      <div>
        <Link href="/application/profile">Profile</Link>
      </div>
      <div>
        <Link href="/application/family">Family</Link>
      </div>
      <div>
        <Link href="/application/education">Education</Link>
      </div>
      <div>
        <Link href="/application/activities">Activities</Link>
      </div>
      <div>
        <Link href="/application/submission">Submission</Link>
      </div>
    </div>
  );
};

export default Appsections;
