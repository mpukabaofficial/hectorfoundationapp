import Appsections from "@/Components/appsections";
import styles from "../../styles/application.module.css";

const Application = ({ children }) => {
  return (
    <div className={styles.container}>
      <Appsections />
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Application;
