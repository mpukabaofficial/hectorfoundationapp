import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Link href="/">Hector Foundation</Link>
      </div>
      <Link href="/profile">Profile</Link>
      <Link href="/">Logout</Link>
    </nav>
  );
};

export default Navbar;
