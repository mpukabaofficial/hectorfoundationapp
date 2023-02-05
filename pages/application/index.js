import Link from "next/link";

const Application = ({}) => {
  return (
    <div>
      <div>
        <Link href="/application/profile">Profile</Link>
      </div>
      <div>
        <Link href="/application/family">Family</Link>
      </div>
      <div>
        <Link href="/application/education">Education</Link>
      </div>
      <div>
        <Link href="/application/activities">Activities</Link>
      </div>
      <div>
        <Link href="/application/submission">Submission</Link>
      </div>
    </div>
  );
};

export default Application;
