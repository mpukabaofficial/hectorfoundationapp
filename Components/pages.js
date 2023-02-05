import Link from "next/link";

const Pages = () => {
  return (
    <div>
      <div>
        <Link href="/">Dashboard</Link>
      </div>
      <div>
        <Link href="/application">Application</Link>
      </div>
      <div>
        <Link href="/">Portal</Link>
      </div>
    </div>
  );
};

export default Pages;
