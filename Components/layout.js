import Footer from "./footer";
import Header from "./header";
import styles from "../styles/layout.module.css";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
