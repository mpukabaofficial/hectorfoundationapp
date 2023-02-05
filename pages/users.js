import Link from "next/link";
import User from "./../Components/user";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { users: data },
  };
};

const Userlist = ({ users }) => {
  return (
    <>
      <Link href="/">go to home</Link>
      {users.map((user) => (
        <div key={user.id}>
          <User user={user} />
        </div>
      ))}
    </>
  );
};

export default Userlist;
