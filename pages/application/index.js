import Appsections from "@/Components/appsections";
import styles from "../../styles/application.module.css";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Application = ({ children }) => {
  if (children == null) {
    const router = useRouter();

    useEffect(() => {
      setTimeout(() => {
        router.push("/application/profile");
      }, 0);
    }, []);
  }

  return (
    <div className={styles.container}>
      <Appsections />
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Application;
