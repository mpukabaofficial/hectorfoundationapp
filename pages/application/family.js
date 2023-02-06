import Link from "next/link";
import Application from "../application/index.js";

const Family = () => {
  return (
    <Application>
      <div className="title">
        <h1>Family</h1>
      </div>
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
