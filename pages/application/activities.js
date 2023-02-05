import Link from "next/link";
import Application from "../application/index.js";

const Activities = () => {
  return (
    <Application>
      <h1>
        <Link href="/">Activities</Link>
      </h1>
    </Application>
  );
};

export default Activities;
