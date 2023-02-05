import Navbar from "../Components/navBar";
import Footer from "../Components/footer";
import Pages from "../Components/pages";
import Userlist from "./testUsers";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <Pages />
      <Userlist />
      <Footer />
      <Link href="/users">users</Link>
    </>
  );
}
