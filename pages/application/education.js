import Link from "next/link";
import Application from "../application/index.js";
import styles from "../../styles/education.module.css";

const Education = () => {
  return (
    <Application>
      <div className="title">
        <h1>Education</h1>
      </div>
      <form action="submit" method="post" id="profile">
        <section>
          <h2>Current School</h2>
          <div className={styles.content}>
            <div>
              <label for="PGname">Name</label>
              <input type="text" id="PGname" name="PGname" required />
            </div>
            <div>
              <label for="PGlast">Current Grade</label>
              <input type="text" id="PGlast" name="PGlast" required />
            </div>
            <div>
              <label for="dob">Since</label>
              <input type="date" id="last" name="last" required />
            </div>
            <div>
              <label for="dob">Anticipated Graduation</label>
              <input type="date" id="last" name="last" required />
            </div>
            <div></div>
          </div>
        </section>
        <section>
          <h2>Other School</h2>
          <div className={styles.content}>
            <div>
              <label for="PGname">Name</label>
              <input type="text" id="PGname" name="PGname" required />
            </div>
            <div>
              <label for="PGlast">Current Grade</label>
              <input type="text" id="PGlast" name="PGlast" required />
            </div>
            <div>
              <label for="dob">Since</label>
              <input type="date" id="last" name="last" required />
            </div>
            <div>
              <label for="dob">Graduation</label>
              <input type="date" id="last" name="last" required />
            </div>
            <div></div>
          </div>
        </section>
        <section>
          <h2>Grades</h2>
          <div className={styles.content}>
            <div>
              <label for="avatar">Please upload your transcripts: </label>
              <input type="file" id="avatar" name="avatar" accept="*" />
            </div>
          </div>
        </section>
      </form>
      <div>
        <button
          type="submit"
          form="profile"
          value="Submit"
          className="btn-application-save"
        >
          Save
        </button>
        <button className="btn-application-next">
          <Link href="/application/activities">Next</Link>
        </button>
      </div>
    </Application>
  );
};

export default Education;
