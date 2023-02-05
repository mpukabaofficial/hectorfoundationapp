import Link from "next/link";
import Application from "../application/index.js";

const Essays = () => {
  return (
    <Application>
      <h1>
        <Link href="/">Essays</Link>
      </h1>
    </Application>
  );
};

export default Essays;
