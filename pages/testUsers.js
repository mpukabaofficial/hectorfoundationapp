export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);

  return {
    props: { people: data },
  };
};

const Userlist = ({ people }) => {
  return <></>;
};

export default Userlist;
