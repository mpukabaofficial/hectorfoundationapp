import Link from "next/link";
import Application from "../application/index.js";
import { useRouter } from "next/router";

const Submission = () => {
  const router = useRouter();
  return (
    <Application>
      <div className="title">
        <h1>Submission</h1>
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
          <Link href="/">Submit</Link>
        </button>
      </div>
    </Application>
  );
};

export default Submission;
