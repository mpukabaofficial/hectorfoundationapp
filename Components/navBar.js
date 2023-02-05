import Link from "next/link";
import Image from "next/image";
import styles from "../styles/navBar.module.css";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Link href="/">
          <Image src="/logo.svg" width="60" height="60" />
        </Link>
      </div>
      <div>
        <Link href="/profile">Profile</Link>
        <Link href="/" className={styles.logout}>
          Logout
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
