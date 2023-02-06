import Link from "next/link";
import Application from "../application/index.js";

const Activities = () => {
  return (
    <Application>
      <div className="title">
        <h1>Activities</h1>
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
          <Link href="/application/essays">Next</Link>
        </button>
      </div>
    </Application>
  );
};

export default Activities;
