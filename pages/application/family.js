import Link from "next/link";
import Application from "../application/index.js";

const Family = () => {
  return (
    <Application>
      <h1>
        <Link href="/">Family</Link>
      </h1>
    </Application>
  );
};

export default Family;
