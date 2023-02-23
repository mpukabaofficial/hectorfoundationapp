import Link from "next/link";
import Application from "../application/index.js";
import styles from "../../styles/family.module.css";

const Family = () => {
  return (
    <Application>
      <div className="title">
        <h1>Family</h1>
      </div>
      <form action="submit" method="post" id="profile">
        <section>
          <h2>Parent or Guardian</h2>
          <div className={styles.content}>
            <div>
              <label for="PGname">Name</label>
              <input type="text" id="PGname" name="PGname" required />
            </div>
            <div>
              <label for="PGlast">Last Name</label>
              <input type="text" id="PGlast" name="PGlast" required />
            </div>
            <div>
              <label for="relation">Relationship</label>
              <input type="text" id="relation" name="relation" required />
            </div>
            <div></div>
          </div>
        </section>
        <section>
          <h2>Contact Details</h2>
          <div className={styles.content}>
            <div>
              <label for="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone" required />
            </div>
            <div>
              <label for="last">Email</label>
              <input type="email" id="last" name="last" />
            </div>
            <div>
              <label for="othrphone">Other Phone Number</label>
              <input type="tel" id="othrphone" name="othrphone" />
            </div>
            <div>
              <label for="otherEmail">Other Email</label>
              <input type="email" id="otherEmail" name="otherEmail" />
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
          <Link href="/application/education">Next</Link>
        </button>
      </div>
    </Application>
  );
};

export default Family;
